import Banner from '../../assets/Cover.png';
import { HeaderBanner } from './style';

export function Header() {
  return (
    <HeaderBanner>
      <img src={Banner} alt='Banner' />
    </HeaderBanner>
  )
}