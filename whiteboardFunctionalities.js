// initiate togther sidebar
// $("#togetherBtn").click(TogetherJS);

// upload file functionality
$('#uploadFile').on('change',function(){
  changeWhiteboardBackground(this);
})
function downloadImage(){
  var link = document.createElement('a');
  link.download = 'Download.jpg';
  link.href = document.getElementById("sketch").toDataURL();
  document.body.appendChild(link);
  link.click();

}

function changeWhiteboardBackground(input) {

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {

          var background = new Image();
          background.crossOrigin="Anonymous";
          background.src = e.target.result;
          document.getElementById('sketch').getContext("2d").clearRect(0, 0, document.getElementById('sketch').width, document.getElementById('sketch').height);

          // Make sure the image is loaded first otherwise nothing will draw.
          background.onload = function(){
            // document.getElementById('sketch').height=String(background.height) + "px";
              document.getElementById('sketch').getContext("2d").drawImage(background,0,0, background.width, background.height);

            // document.getElementById('sketch').getContext("2d").drawImage(background,0,0);
            // console.log("document.getElementById('sketch').height ",document.getElementById('sketch').height)
            $('#sketchContainer').outerHeight(String(background.height) + "px", true);
          }
        }

        reader.readAsDataURL(input.files[0]);
    }
}
