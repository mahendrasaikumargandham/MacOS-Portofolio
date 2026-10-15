import { useState } from 'react';
import { Search } from 'lucide-react';
import useWindowStore from '../store/window';
import { WindowControls } from '../components';
import { gallery, locations } from '../constants';
import WindowWrapper from '../hoc/WindowWrapper';
import ViewSwitcher from '../components/ViewSwitcher';
import { useFileView } from '../store/useFileView';

const pictures = [
  ...gallery.map(({ id, img }) => ({ id: 'gallery-' + id, name: 'Gallery photo ' + id, imageUrl: img, album: 'Gallery' })),
  ...locations.work.children.flatMap(project => project.children.filter(item => item.fileType === 'img').map(item => ({ ...item, id: 'project-' + item.id, album: 'Projects', name: project.name + ' - ' + item.name }))),
];
function Photos() {
  const openWindow = useWindowStore(state => state.openWindow);
  const [view, setView] = useFileView();
  const [album, setAlbum] = useState('All');
  const [query, setQuery] = useState('');
  const visible = pictures.filter(item => (album === 'All' || item.album === album) && item.name.toLowerCase().includes(query.toLowerCase()));
  return <div className="photo-browser">
    <div id="window-header"><WindowControls target="photos" /><h2>Photos</h2><label className="finder-search"><Search size={14} aria-hidden="true" /><input type="search" aria-label="Search photos" placeholder="Search" value={query} onChange={event => setQuery(event.target.value)} /></label></div>
    <div className="file-toolbar">
      <div className="photo-albums" role="group" aria-label="Photo albums">{['All', 'Gallery', 'Projects'].map(name => <button key={name} type="button" aria-pressed={album === name} onClick={() => setAlbum(name)}>{name}</button>)}</div>
      <ViewSwitcher view={view} onChange={setView} />
    </div>
    <div className="photo-results" data-view={view}>
      {visible.map(item => <button key={item.id} type="button" className="photo-result" onClick={() => openWindow('imgfile', { ...item, kind: 'file', fileType: 'img' })}>
        <img src={item.imageUrl} alt="" loading="lazy" /><span>{item.name}<small>{item.album}</small></span>
      </button>)}
      {!visible.length && <p className="photo-empty">No matching photos</p>}
    </div>
    <footer className="window-status"><span>{album} photos</span><span>{visible.length} items</span></footer>
  </div>;
}
const PhotosWindow = WindowWrapper(Photos, 'photos');
export default PhotosWindow;
