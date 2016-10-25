flag = false;
var per_page = 5
var paged = 1
get_remote_datas( 'app', false, per_page, paged );

var nextArray = this.items = []
this.click = function( e ) {

  paged++
  console.log( paged )
  var test = get_remote_datas( 'nextload', true, per_page, paged )

}

function get_remote_datas( target, check, per_page, paged ) {

  console.log( per_page )

  var baseUrl = 'https://private.hibou-web.com/wp-json/wp/v2/posts'
  var param = '?per_page='
  var per_page = per_page
  var paged_str = '&page='
  var paged = paged
  var requestUrl = baseUrl + param + per_page + paged_str + paged
  console.log( requestUrl )

  $.ajax({
    url      : requestUrl,
    type     : 'GET',
    data     : {
    },
  }).done( function( response ) {

    var tags = riot.mount(target, {
      posts: response
    });

    //console.log( this.items )

  }).fail(function( response ) {

    console.log('load error');

  });

}
