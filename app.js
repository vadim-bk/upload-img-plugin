import firebase from 'firebase/app';
import 'firebase/storage';
import { upload } from './upload';

const firebaseConfig = {
  apiKey: 'AIzaSyAK8of8WCVAFnVKxGWmk3MgPLmKEB-vB-g',
  authDomain: 'fe-upload-fc5b3.firebaseapp.com',
  projectId: 'fe-upload-fc5b3',
  storageBucket: 'fe-upload-fc5b3.appspot.com',
  messagingSenderId: '744423244248',
  appId: '1:744423244248:web:642541655d1152e17532ad',
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

upload('#file', {
  multiple: true,
  accept: ['.png', '.jpeg', '.jpg', '.gif'],
  onUpload(files, blocks) {
    files.forEach((file, i) => {
      const ref = storage.ref(`images/${file.name}`);
      const task = ref.put(file);
      task.on(
        'state_changed',
        (snapshot) => {
          const percent =
            ((snapshot.bytesTransferred / snapshot.totalBytes) * 100).toFixed(0) + '%';
          const block = blocks[i].querySelector('.preview-info-progress');
          block.textContent = percent;
          block.style.width = percent;
        },
        (error) => {
          console.log(error);
        },
        () => {
          task.snapshot.ref.getDownloadURL().then((url) => console.log('Download URL', url));
        }
      );
    });
  },
});
