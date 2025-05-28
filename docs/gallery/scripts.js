 document.addEventListener('DOMContentLoaded', () => {
  const gallery = document.getElementById('gallery');
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxVideo = document.getElementById('lightbox-video');
  const lightboxIframe = document.getElementById('lightbox-iframe');
  const lightboxTitle = document.getElementById('lightbox-title');
  const lightboxDescription = document.getElementById('lightbox-description');
  const closeBtn = document.querySelector('.close');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');

  let currentIndex = 0;

  function getMediaType(url) {
    if (url.includes('youtube.com') || url.includes('youtu.be')) {
      return 'youtube';
    } else if (url.match(/\.(mp4|webm|ogg)$/i)) {
      return 'video';
    } else {
      return 'image';
    }
  }

  mapData.forEach((map, index) => {
    const type = getMediaType(map.src);

    let mediaElement;
    if (type === 'image') {
      mediaElement = document.createElement('img');
      mediaElement.src = map.src + '?raw=true';
    } else if (type === 'video') {
      mediaElement = document.createElement('video');
      mediaElement.src = map.src;
      mediaElement.controls = true;
      mediaElement.autoplay = true;
      mediaElement.muted = true;        // Obligatoire pour autoplay
      mediaElement.loop = true;         // Optionnel : permet de boucler la vidéo
      mediaElement.playsInline = true;  // Important pour mobile
    } else if (type === 'youtube') {
      mediaElement = document.createElement('img');
      const videoId = map.src.split('v=')[1] || map.src.split('/').pop();
      mediaElement.src = `https://img.youtube.com/vi/${videoId}/0.jpg`;
    }

    mediaElement.alt = map.alt || map.title;
    mediaElement.dataset.index = index;
    mediaElement.classList.add('gallery-img');
    const container = document.createElement('div');
    container.classList.add('gallery-item');
    container.appendChild(mediaElement);
    gallery.appendChild(container);

    mediaElement.addEventListener('click', () => {
      lightbox.style.display = 'flex';
      updateLightbox(index);
    });
  });

  closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
    lightboxVideo.pause();
    lightboxVideo.src = '';
    lightboxIframe.src = '';
  });

  document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
      if (e.key === 'ArrowRight') {
        navigateNext();
      } else if (e.key === 'ArrowLeft') {
        navigatePrev();
      } else if (e.key === 'Escape') {
        lightbox.style.display = 'none';
        lightboxVideo.pause();
        lightboxVideo.src = '';
        lightboxIframe.src = '';
      }
    }
  });

  prevBtn.addEventListener('click', navigatePrev);
  nextBtn.addEventListener('click', navigateNext);

  function navigateNext() {
    currentIndex = (currentIndex + 1) % mapData.length;
    updateLightbox(currentIndex);
  }

  function navigatePrev() {
    currentIndex = (currentIndex - 1 + mapData.length) % mapData.length;
    updateLightbox(currentIndex);
  }

  function updateLightbox(index) {
    const map = mapData[index];
    const type = getMediaType(map.src);

    lightboxImg.style.display = 'none';
    lightboxVideo.style.display = 'none';
    lightboxIframe.style.display = 'none';

    if (type === 'image') {
      lightboxImg.src = map.src + '?raw=true';
      lightboxImg.alt = map.alt;
      lightboxImg.style.display = 'block';
   } else if (type === 'video') {
  lightboxVideo.src = map.src;
  lightboxVideo.style.display = 'block';
  lightboxVideo.muted = true;           // autoplay autorisé
  lightboxVideo.autoplay = true;        // démarre dès affichage
  lightboxVideo.controls = true;        // affiche les boutons
  lightboxVideo.loop = false;           // facultatif
  lightboxVideo.playsInline = true;     // pas de plein écran iOS
  lightboxVideo.play();                 // déclenche la lecture
    } else if (type === 'youtube') {
      const videoId = map.src.split('v=')[1] || map.src.split('/').pop();
      lightboxIframe.src = `https://www.youtube.com/embed/${videoId}`;
      lightboxIframe.style.display = 'block';
    }

    lightboxTitle.innerText = map.title;
    lightboxDescription.innerText = map.description;
    currentIndex = index;
  }
});
