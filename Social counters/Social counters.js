!function(e){e.fn.SocialCounter=function(t){function o(){e.ajax({url:"https://api.pinterest.com/v3/pidgets/users/"+k.pinterest_user+"/pins",dataType:"jsonp",type:"GET",success:function(t){var o=parseInt(t.data.user.follower_count),a=h(o);e("#socialcounter .social_item.social_pinterest .count").append(a),e("#socialcounter .social_item.social_pinterest").attr("href","https://pinterest.com/"+k.pinterest_user),getTotal(o)}})}function s(){e.ajax({url:"https://graph.facebook.com/v2.8/"+k.facebook_user,dataType:"json",type:"GET",data:{access_token:k.facebook_token,fields:"fan_count"},success:function(t){var o=parseInt(t.fan_count),a=h(o);e("#socialcounter .social_item.social_facebook .count").append(a),e("#socialcounter .social_item.social_facebook").attr("href","https://facebook.com/"+k.facebook_user),getTotal(o)}})}function n(){e.ajax({url:"https://api.instagram.com/v1/users/self/",dataType:"jsonp",type:"GET",data:{access_token:k.instagram_token},success:function(t){var o=parseInt(t.data.counts.followed_by),a=h(o);e("#socialcounter .social_item.social_instagram .count").append(a),e("#socialcounter .social_item.social_instagram").attr("href","https://instagram.com/"+k.instagram_user),getTotal(o)}})}function u(){e.ajax({url:"https://www.googleapis.com/plus/v1/people/"+k.google_plus_id,type:"GET",dataType:"json",data:{key:k.google_plus_key},success:function(t){var o=parseInt(t.circledByCount),a=h(o);e("#socialcounter .social_item.social_google-plus .count").append(a),e("#socialcounter .social_item.social_google-plus").attr("href","https://plus.google.com/"+k.google_plus_id),getTotal(o)}})}function i(){e.ajax({url:"https://www.googleapis.com/youtube/v3/channels",dataType:"jsonp",type:"GET",data:{part:"statistics",forUsername:k.youtube_user,key:k.youtube_key},success:function(t){var o=parseInt(t.items[0].statistics.subscriberCount),a=h(o);e("#socialcounter .social_item.social_youtube .count").append(a),e("#socialcounter .social_item.social_youtube").attr("href","https://youtube.com/"+k.youtube_user),getTotal(o)}})}function p(){e.ajax({url:"https://api.github.com/users/"+k.github_user,dataType:"json",type:"GET",success:function(t){var o=parseInt(t.followers),a=h(o);e("#socialcounter .social_item.social_github .count").append(a),e("#socialcounter .social_item.social_github").attr("href","https://github.com/"+k.github_user),getTotal(o)}})}function h(e){return e>999?(e/1e3).toFixed(1)+"k":e}function g(){e("#socialcounter .social_item").attr("target","_blank")}var k=e.extend({facebook_user:"",facebook_token:"",instagram_user:"",instagram_token:"",google_plus_id:"",google_plus_key:"",youtube_user:"",youtube_key:"",pinterest_user:"",soundcloud_user_id:"",github_user:""},t);e.fn.digits=function(){return this.each(function(){e(this).text(e(this).text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,"))})};g(),""!=k.facebook_user&&""!=k.facebook_token&&s(),""!=k.instagram_user&&""!=k.instagram_token&&n(),""!=k.google_plus_id&&""!=k.google_plus_key&&u(),""!=k.youtube_user&&""!=k.youtube_key&&i(),""!=k.pinterest_user&&o(),""!=k.github_user&&p()}}(jQuery);
