import './repo_link.css'

import GitIcon from '../../assets/icons/git.svg';

export default function RepoLink() {
  return (
    <>
      <a href="#" id="gitRepository">
        <img src={GitIcon} alt="My git repository" />
        <span>See the repo here.</span>
      </a>
    </>
  );
}
