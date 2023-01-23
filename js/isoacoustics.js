const isoOverlay = document.getElementById('iso_overlay')
const closeButton = document.getElementById('close_button')
const clickClose = () => {
  isoOverlay.classList.remove('d-block')
  isoOverlay.classList.add('d-none')
}

const clickStart = () => {
  console.log(isoOverlay.style)
  isoOverlay.classList.remove('d-none')
  isoOverlay.classList.add('d-block')
  closeButton.onclick = clickClose
  const frameLoaded = document.getElementById('#id__23')
  if (frameLoaded) {
      frameLoaded.style.setProperty('overflow', 'scroll', 'important')
  }
}

const clickBody = e => {
  if (isoOverlay.classList.contains('d-block')) {
    if (e.target.className !== 'iso_content' && e.target.id !== 'fireFrame') {
      isoOverlay.classList.remove('d-block')
      isoOverlay.classList.add('d-none')
    }
  }
}

document.addEventListener("click", clickBody)

const fireButton = document.getElementById("fireFrame")
fireButton.onclick = clickStart
// fireButton.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 767.2 869.7"><defs><style>.e0b60672-7794-4f5e-961e-fa078b105bb8{fill:#fff;}</style></defs><g id="b364506b-bea8-4609-8336-de3d6a7e9a3a" data-name="Layer 2"><g id="a25e6291-416a-4319-b340-b17a896cf4fe" data-name="Layer 1"><path class="e0b60672-7794-4f5e-961e-fa078b105bb8" d="M481,289.8,4.9,765.8a16.8,16.8,0,0,0,0,23.7l75.3,75.3a16.8,16.8,0,0,0,23.7,0L580,388.8l-99-99Z"></path><path class="e0b60672-7794-4f5e-961e-fa078b105bb8" d="M705.8,231.7,638,164a21.9,21.9,0,0,0-31.2,0L495.1,275.6l99,99L705.8,263A22.2,22.2,0,0,0,705.8,231.7Z"></path><polygon class="e0b60672-7794-4f5e-961e-fa078b105bb8" points="510.6 66.7 477.2 50 510.6 33.3 527.2 0 543.9 33.3 577.2 50 543.9 66.7 527.2 100 510.6 66.7"></polygon><polygon class="e0b60672-7794-4f5e-961e-fa078b105bb8" points="700.6 456.7 667.2 440 700.6 423.3 717.2 390 733.9 423.3 767.2 440 733.9 456.7 717.2 490 700.6 456.7"></polygon><path class="e0b60672-7794-4f5e-961e-fa078b105bb8" d="M404.7,165l-12.5,25-25,12.5,25,12.5,12.5,25,12.5-25,25-12.5-25-12.5-12.5-25Z"></path><path class="e0b60672-7794-4f5e-961e-fa078b105bb8" d="M729.7,80l-12.5,25-25,12.5,25,12.5,12.5,25,12.5-25,25-12.5-25-12.5L729.7,80Z"></path></g></g></svg>'

try {
    if (window.addEventListener && window.postMessage) {
        window.addEventListener(
            'message',
            function (evt) {
                let iframe = document.getElementById('isoacoustics-iframe')
                if (iframe && iframe.src.indexOf(evt.origin) === 0) {
                    iframe.scrolling = 'yes' // disables safari bounce
                    iframe.style.height = [evt.data.height, 'px'].join('')
                }
                iframe = null
            },
            false
        )
    }
} catch (e) {
    console.error(e)
}

