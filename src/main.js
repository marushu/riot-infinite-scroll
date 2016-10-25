flag = false;
var counter = 1
get_remote_datas( 'app', false, counter );

var nextArray = this.items = []
this.click = function( e ) {

  counter++
  var test = get_remote_datas( 'nextload', true, counter )

}

function get_remote_datas( target, check, paged ) {

  var baseUrl = 'https://private.hibou-web.com/wp-json/wp/v2/posts'
  var posts_per_page = 2
  var pageNum = 1
  var param = '?per_page='
  var paged = paged
  var requestUrl = baseUrl + param + paged
  //console.log( requestUrl )

  $.ajax({
    url      : requestUrl,
    type     : 'GET',
    data     : {
    },
  }).done( function( response ) {

    var tags = riot.mount(target, {
      posts: response
    });

    console.log( this.items )

  }).fail(function( response ) {

    console.log('load error');

  });

}
