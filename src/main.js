flag = false;
var per_page = 5
var paged = 1
var items = []
var nextarr = []
get_remote_datas( 'app', false, per_page, paged );
window.onload = function() {
  riot.mount( 'loading' )
};

this.click = function( e ) {

  paged++
  get_remote_datas( 'nextload', true, per_page, paged )
  riot.mount( 'loading' )

}

function get_remote_datas( target, check, per_page, paged ) {

  var baseUrl = 'https://private.hibou-web.com/wp-json/wp/v2/posts'
  var paged = paged

  $.ajax({

    url           : baseUrl,
    type          : 'GET',
    dataType      : 'json',
    data          : {
      'per_page'  : per_page,
      'page'     : paged,
    },

  }).done( function( response ) {

    console.log( response )

    if ( target === 'app' ) {

      riot.mount(target, {
        datas: response
      });
      riot.mount( 'putbutton' )

    } else {

      for ( i = 0; i < response.length; i++ ) {

        nextarr.push( response[ i ] )

      }
      console.log( nextarr );

      riot.mount(target, {
        datas: nextarr
      });

    }
    element = document.querySelector( '.spinner' );
    if ( element ) {
      element.parentNode.removeChild( element );
    }

    //console.log( response.length )
    //console.log( per_page )
    riot.mount( 'lastdatas', {
      counts: nextarr.length + per_page
    });


  }).fail(function( response ) {

    console.log('load error');

  });

}
