import { Folder, FileText, Globe, Image } from 'lucide-react';

export default function FileIcon({ item }) {
  return <span className={'file-icon ' + (item.kind === 'folder' ? 'is-folder' : '')}>
    {item.kind === 'folder' ? <Folder aria-hidden="true" /> :
      item.imageUrl ? <img src={item.imageUrl} alt="" loading="lazy" /> :
        item.fileType === 'url' ? <Globe aria-hidden="true" /> :
          item.fileType === 'img' ? <Image aria-hidden="true" /> : <FileText aria-hidden="true" />}
  </span>;
}
