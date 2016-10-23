//const riot = require("riot");
//
//require("./components/app.tag");
//require("./components/main-header.tag");
//require("./components/raw.tag");
//require("./components/post.tag");

//fetch("http://api.wp-app.org/wp-json/wp/v2/posts", {
//	method: "GET",
//	mode: 'cors'
//}).then( (data) => {
//	return data.json();
//}).then( (data) => {
//	console.log(data);
//	riot.mount("app", {
//		posts: data
//	});
//}).catch( (err) => {
//	alert(err);
//});


//var flag = true;
//this.click = function() {
  //console.log('now click');
  //if ( flag ) {
    flag = false;
    //$( 'button#get_datas' ).prop( 'disabled', true ).text( 'Now get datas…' );
    jQuery.ajax({
    	url      : 'https://private.hibou-web.com/wp-json/wp/v2/posts/',
    	type     : 'GET',
    	data     : {
    	},
    }).done( function( response ) {
    	console.log( response );
      console.log( response.length );
      console.log( response[0].title.rendered );
      flag = true;
      //$( 'button#get_datas' ).prop( 'disabled', false ).text( 'click' );

			riot.mount("app", {
				posts: response
			});


    }).fail(function( response ){
    	console.log('load error');
    });
  //}
//};
this.clickItem = function(e) {
  console.log(e.item.name + 'clicked');
};
this.more = function( e ) {
  console.log( $( e.target ).text() );
}
