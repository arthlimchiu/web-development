import '@fortawesome/fontawesome-free/css/all.css';
import Modal from './components/Modal.js';
import IdeaForm from './components/IdeaForm.js';
import IdeaList from './components/IdeaList.js';
import './css/style.css';

new Modal();
const ideaList = new IdeaList();
const ideaForm = new IdeaForm(ideaList);
ideaForm.render();
