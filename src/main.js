flag = false;
var per_page = 5
var paged = 1
var items = []
var nextarr = []
get_remote_datas( 'app', false, per_page, paged );

this.click = function( e ) {

  paged++
  get_remote_datas( 'nextload', true, per_page, paged )

}

function get_remote_datas( target, check, per_page, paged ) {

  var baseUrl = 'https://private.hibou-web.com/wp-json/wp/v2/posts'
  var param = '?per_page='
  var per_page = per_page
  var paged_str = '&page='
  var paged = paged
  var requestUrl = baseUrl + param + per_page + paged_str + paged

  var self = this

  $.ajax({

    url      : requestUrl,
    type     : 'GET',
    dataType : 'json',

  }).done( function( response ) {

    if ( target === 'app' ) {

      riot.mount(target, {
        posts: response
      });

    } else {

      for ( i = 0; i < response.length; i++ ) {

        nextarr.push( response[ i ] )

      }

      riot.mount(target, {
        posts: nextarr
      });

    }

  }).fail(function( response ) {

    console.log('load error');

  });

}
