import { Html, Head, Main, NextScript } from 'next/document'
import { yuvaCracyLogo } from '@/public/assets'
import Image from 'next/image'
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <div id={'globalLoader'} className=' flex justify-center bg-white items-center w-[100%] h-[100vh] '>
          <div className="loader blob loading  ">
            <div className=' flex justify-center items-center w-[100%] h-[100%] '>
              <Image
                src={yuvaCracyLogo}
                alt={'Logo'} height={500} width={500}
                className=' w-[80%]   '
              />
            </div>
            <span></span>
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
