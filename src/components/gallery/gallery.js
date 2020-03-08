import React, { Component } from 'react'

import compStyles from './gallery.module.scss'

import BlogRow from '../../components/blog-row'
import Pill from '../../components/pill'

class BlogIndex extends Component {

  constructor(props) {
      super(props);
      const posts = this.props.edges.sort(function(a, b){
        return new Date(b.node.frontmatter.written) - new Date(a.node.frontmatter.written)
      })
      this.state = {
        tags: [
          {value: "Tout", active: true},
          {value: "UX", active: false},
          {value: "UI", active: false},
          {value: "Design", active: false},
          {value: "Code", active: false},
          {value: "Projet", active: false},
        ],
        filteredPosts: posts,
        sortedPosts: posts,
        isNewest: true
      };
  }

  tagClick = (value) => {
    window.scrollTo(0, 0);
    let ta = this.state.tags
    let filter = []

    //Determin what pills should be turned on or off
    if (value === "Tout"){
      ta = [
        {value: "Tout", active: true},
        {value: "UX", active: false},
        {value: "UI", active: false},
        {value: "Design", active: false},
        {value: "Code", active: false},
        {value: "Projet", active: false},
      ]
      filter = []
    } else {
      ta.forEach(element => {
        if(element.value === "Tout") {
          element.active = false
        }else if(element.value === value) {
          element.active = !element.active
        }
      });
    }

    //Create filter list to send to fliter function
    ta.forEach(element => {
      if(element.active) {
        if(element.value !== "Tout"){
          filter.push(element.value)
        }
      }
    });

    //Check to see if the one button on was turned off, then turn on Everything
    if (filter.length === 0){
      ta = [
        {value: "Tout", active: true},
        {value: "UX", active: false},
        {value: "UI", active: false},
        {value: "Design", active: false},
        {value: "Code", active: false},
        {value: "Projet", active: false},
      ]
    }

    this.setState({
      tags: ta
    })

    this.filterPosts(filter)
  }

  filterPosts = (tags, sorted) => {
    let gotem = true
    if (!sorted) {
      sorted =[...this.state.sortedPosts]
    }
    let filtered  = sorted.filter(function(post) {
      gotem = true

      //Loops through the filter tags and the posts to look for matching records
      tags.forEach(tag => {
        if(post.node.frontmatter.category.indexOf(String(tag.toLowerCase())) === -1) {
          gotem = false
        }
      })
      if (gotem){
        return post
      }
      return false
    })
    this.setState({
      filteredPosts: filtered
    })
  }

  sortNewest = () => {
    const p = [...this.state.sortedPosts]
    console.log(p)
    p.sort(function(a, b){
      return new Date(b.node.frontmatter.written) - new Date(a.node.frontmatter.written)
    })
    this.setState({
      isNewest: true,
      sortedPosts: p
    })
    this.triggerFilter(this.state.tags, p)
  }

  sortOldest = () => {
    const p = [...this.state.sortedPosts]
    p.sort(function(a, b){
      return new Date(a.node.frontmatter.written) - new Date(b.node.frontmatter.written)
    })
    this.setState({
      isNewest: false,
      sortedPosts: p
    })
    this.triggerFilter(this.state.tags, p)
  }

  triggerFilter(ta, p) {
    let filter = []
    //Create filter list to send to fliter function
    ta.forEach(element => {
      if(element.active) {
        if(element.value !== "Tout"){
          filter.push(element.value)
        }
      }
    });
    this.filterPosts(filter, p)
  }

  render() {    
    return (
    <div className={compStyles.cont}>

        <div className={compStyles.left}>
        <div className={compStyles.lefttop}>
            <div>
                <h2>Portfolio</h2>
                <p className={compStyles.desc}>Filtrer les projets avec le(s) critère(s) suivant(s)</p> 
            </div>
            <div className={compStyles.tags}>
                {this.state.tags.map((tag, index) =>(
                    <Pill 
                    key={index}
                    active={tag.active}
                    click={this.tagClick}
                    value={tag.value}
                    />
                ))}
            </div>
        </div>

        <div className={compStyles.listHeader}>
            <button className={[compStyles.listSort, this.state.isNewest ? compStyles.inactive : null]} onClick={this.sortOldest}>
            <i className="fas fa-long-arrow-alt-up"></i>
            </button>
            <button className={[compStyles.listSort, this.state.isNewest ? null : compStyles.inactive]} onClick={this.sortNewest}>
            <i className="fas fa-long-arrow-alt-down"></i>
            </button>
            <div className={compStyles.listCount}>
            <span className={compStyles.listCountNum}>{this.state.filteredPosts.length}</span>
            of
            <span className={compStyles.listCountNum}>{this.state.sortedPosts.length}</span>
            projects
            </div>
        </div>

        </div>

        <div className={compStyles.listCont}>
        { this.state.filteredPosts.length < 1 &&
            <div className={compStyles.whoops}>
            <div className={compStyles.sad}>¯\_(ツ)_/¯</div>
            Whoops, il faut croire qu'il n'y a pas de résultats avec vos critères ! Essayez une autre requête.
            </div>
        }

        <div className={compStyles.list}>
            {this.state.filteredPosts.map(post =>(
            <BlogRow 
                key={post.node.node.id}
                date={post.node.frontmatter.written}
                title={post.node.frontmatter.title}
                tags={post.node.frontmatter.category}
                link={`portfolio/${post.node.node.name}`}
                bg={post.node.frontmatter.path}
            />
            ))}
        </div>
        </div>
    </div>
    );
  }
}

export default BlogIndex;


