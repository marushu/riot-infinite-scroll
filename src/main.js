<app>
	<main-header></main-header>

	<div class="contents">
		<post each={ opts.posts } title={ title } content={ content }>
	</div>

	<style>
		.contents {
			border-bottom: 10px solid red;
		}
	</style>

</app>

<nextload>

	<div class="contents">
		<post each={ opts.posts } title={ title } content={ content }>
	</div>

	<script>
	  this.on('mount', function(){
			console.log( 'mounted' )
	  })
		//this.update()
	  </script>

</nextload>


flag = false;
var per_page = 5
var paged = 1
var items = []
get_remote_datas( 'app', false, per_page, paged );

var nextArray = this.items = []
this.click = function( e ) {

  paged++
  get_remote_datas( 'nextload', true, per_page, paged )

}

var testarr = []

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

      //console.log( target )
      for ( i = 0; i < response.length; i++ ) {

        testarr.push( response[ i ] )

      }
      //console.log( testarr )

      riot.mount(target, {
        posts: testarr
      });

    }

  }).fail(function( response ) {

    console.log('load error');

  });

}
