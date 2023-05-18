import { pathImages } from '@/utils/path-images'
import Image from 'next/image'

export const Logo = () => {
  return <Image src={pathImages.logo} alt="Logo" width={140} height={80} />
}
