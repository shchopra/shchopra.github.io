// Based on a script by Kathie Decora : katydecorah.com/code/lunr-and-jekyll/

//Create the lunr index for the search

var index = elasticlunr(function () {
  this.addField('title')
  this.addField('author')
  this.addField('layout')
  this.addField('content')
  this.setRef('id')
});

//Add to this index the proper metadata from the Jekyll content



index.addDoc({
  title: "Microblog sequence for introduction to mechatronics (CMPE118 class) at UCSC",
  author: "Shaurya Chopra",
  layout: "post",
  content: "\nWhat is this microblog sequence about? What is a microblog sequence?\n\nPinned post\nDate: 09/28/17, Time: 3:00 PM\n\nI’m in my senior year at University of California, Santa Cruz taking\nwhat is considered the hardest course on campus. Today, was the first\nday of classes and I decided to start a posting on this page. I’ll\ncontinue to make these posts as I go along the course posting\npictures and writing about concepts that are interesting\nor simply writing about what we’ve been doing in the lab. The posts\nwill continue on this page till the end of class and these posts could\nbe brief or … long. Some of the posts might only have a picture and\na caption, hence the name microblog sequence. This post will be pinned\non top and posts following this one will follow.\n\n\n\nLab 0 Done!\nDate: 10/06/17, Time: 11:00 AM\n\nAfter one crazy week of the class, I was checked off by the TA (teaching\nassistant). This lab assignment was designed to be completed with a lab partner.\nI did this lab with my good friend, James Trombadore. We had roughly five days\nto finish the assignment. This assignment involved a lot of low level\nprogramming on hardware that we were given. We had a roach robot which was\nequipped with four bumpers (two in the front and two in the back) for tactile\nsensing and a light sensor to check if it’s light or dark. Behaviors were coded\nbased on the stimuli that the roach received. The fun part was figuring out the\nevents and services framework to program our finite state machine (FSM) and the\nhierarchical state machine (HSM). After 5 days of working 6 hours on average, we\nfinished this morning. I feel mellow. As I was working on this lab, I felt\nimmense equanimity for the most part. Even when the robot wasn’t working. Over\nthe years of working with robots or anything technical in that matter, I used to\nfeel frustrated when I was stuck. A majority of the time it doesn’t go smoothly\nand it’s an iterative process of staying at it and getting it to work. I am more\nin comfort with that process. I’m comfortable and calm in general when I’m in\nengineering. I realized that in this lab that this is a good skill that I learnt\nover the years.\n\nThis lab also had a prelab where we had to hash out our designs and pseudocode\neven before we begin working on the actual software and hardware. I enjoyed\ndoing that. I want to get in to the habit of doing that all the time. It’s a lot\nof fun so far.This post will be updated with videos\nand will be proofread soon.\n\nVideos\nVideos for the roach are uploading.\n\n\n",
  id: 0
});
index.addDoc({
  title: "Playing with Jekyll and creating this blog",
  author: "Shaurya Chopra",
  layout: "post",
  content: "\nHow I got intrested in Jekyll\n\nI got interested in Jekyll when I found out that it was a great static website\ngenerator. I have been blogging on wordpress since 2010 but I thought that having \na static website would be great. There are a couple reasons why I like jekyll\nmore than wordpress.\n\nBetter interface\n\nAll of my workflow is setup in my terminal and when I use github to host my blog,\nI can simply use my terminal to manage my blog.\n\nFuture plans for my blog and private journal\n\nIn the long run I’m hoping to develop a system that is easily manageable, searchable\nand maintainable. One of the challenges with using a software like evernote is that \none does not own the data. They can change their policies or plans whenever they want.\nIf they stop supporting their software, then all the data is at risk of loss. \nAs of now the best choice seems jekyll that supports latex.\n\nHere is an example MathJax inline rendering \\( 1/x^{2} \\), and here is a block rendering: \n\\[ \\frac{1}{n^{2}} \\]\n\n\n",
  id: 1
});
console.log( jQuery.type(index) );

// Builds reference data (maybe not necessary for us, to check)


var store = [{
  "title": "Microblog sequence for introduction to mechatronics (CMPE118 class) at UCSC",
  "author": "Shaurya Chopra",
  "layout": "post",
  "link": "/texts/01_CMPE_118_running_blog/",
}
,{
  "title": "Playing with Jekyll and creating this blog",
  "author": "Shaurya Chopra",
  "layout": "post",
  "link": "/texts/02_jekyll_post/",
}
]

//Query

var qd = {}; //Gets values from the URL
location.search.substr(1).split("&").forEach(function(item) {
    var s = item.split("="),
        k = s[0],
        v = s[1] && decodeURIComponent(s[1]);
    (k in qd) ? qd[k].push(v) : qd[k] = [v]
});

function doSearch() {
  var resultdiv = $('#results');
  var query = $('input#search').val();

  //The search is then launched on the index built with Lunr
  var result = index.search(query);
  resultdiv.empty();
  if (result.length == 0) {
    resultdiv.append('<p class="">No results found.</p>');
  } else if (result.length == 1) {
    resultdiv.append('<p class="">Found '+result.length+' result</p>');
  } else {
    resultdiv.append('<p class="">Found '+result.length+' results</p>');
  }
  //Loop through, match, and add results
  for (var item in result) {
    var ref = result[item].ref;
    var searchitem = '<div class="result"><p><a href="'+store[ref].link+'?q='+query+'">'+store[ref].title+'</a></p></div>';
    resultdiv.append(searchitem);
  }
}

$(document).ready(function() {
  if (qd.q) {
    $('input#search').val(qd.q[0]);
    doSearch();
  }
  $('input#search').on('keyup', doSearch);
});
