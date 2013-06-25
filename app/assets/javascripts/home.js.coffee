# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

tinymce.init({
  body_id: "tinymce",
  selector: "textarea",
  language : 'zh_CN',
  menubar: false,
  width: 600,
  height : 500,
  plugins: [ "emoticons textcolor link image charmap preview insertdatetime hr wordcount fullscreen" ],
  toolbar1: "bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | 
             forecolor backcolor charmap emoticons | link image ",
  toolbar2: "styleselect formatselect fontselect fontsizeselect | hr removeformat inserttime fullscreen preview ",
  style_formats: [
    {title: 'Bold text', inline: 'b'},
    {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
    {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
    {title: 'Example 1', inline: 'span', classes: 'example1'},
    {title: 'Example 2', inline: 'span', classes: 'example2'},
    {title: 'Table styles'},
    {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
  ]
});
