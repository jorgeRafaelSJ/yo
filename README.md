Assumptions: 
1. It is okay to save regular unpinned posts in localHost and have them load initially. They may be replaced by new posts in the HTTP request if they are different than the top 20 in the API. Favorite/pinned/saved posts will still persist. 

2. If a post is unfavorited and no longer appears in the request of top 20 is it okay to display it at the top of the list of unfavorited posts. 