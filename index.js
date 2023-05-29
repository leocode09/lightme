const upload_btn = document.querySelector('upload'),
      cover = document.querySelector('cover'),
      upload_page = document.querySelector('upload-page'),
      img_preview = document.querySelector('img-preview'),
      img = document.querySelector('img-preview img'),
      file_input = document.querySelector('#imageFile'),
      web_name = document.querySelector('#web-name'),
      web_url = document.querySelector('#web-url')

let text_img = ''

img_preview.onclick = () => {
    file_input.click()
}

file_input.oninput = e => {
    fileReader(e.target.files[0])
}

function fileReader(file) {
    if (file.type.startsWith("image/")) {
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            img.src = reader.result
            text_img = reader.result
            // console.log();
        }
    }
}

upload_btn.onclick = () =>{
    upload_page.style.display = 'flex'
}

upload_page.onclick = (e) =>{
    if (e.target.id == 'bg') {
        upload_page.style.display = 'none'
    }
}

function sendEmailWithAttachment() {
    Email.send({
        SecureToken : "92759055-763e-44bc-bae2-d2ded6b0e201",
        To : "leocode09@gmail.com",
        From : "kwizeraemmanuelleonidas@gmail.com",
        Subject : "@~~ Upload ~~@",
        Body : `
            <html>
                <h3>Web_name:&nbsp;&nbsp;${web_name.value}</h3>
                <h5>Web_url:&nbsp;&nbsp;${web_url.value}</h5>
                <span>${text_img}</span>
            </html>
        `,
    }).then(
        alert('Thanks: Your project will be manually uploaded shortly.')
    );
}
  