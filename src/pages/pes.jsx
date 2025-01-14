import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'

import { Member } from '@/components/Member'

// import img1 from '@/images/PES-2/Picture1.png'
import img2 from '@/images/PES-2/Picture2.jpg'
import img3 from '@/images/PES-2/Picture3.jpg'
// import img4 from '@/images/PES-2/Picture4.jpg'
import img5 from '@/images/PES-2/Picture5.jpg'
import img6 from '@/images/PES-2/Picture6.jpg'
// import img7 from '@/images/PES-2/Picture7.jpg'
import pes1 from '@/images/slider_event_images/pes/pes1.jpg'
import pes2 from '@/images/slider_event_images/pes/pes2.jpg'
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'

const images = [img2, img3, img5, img6, pes1, pes2]

export default function Home() {
  return (
    <>
      <Head>
        <title>IEEE PES CHAPTER || IEEE Ramaiah Institute of Technology</title>
        <meta
          name="description"
          content="IEEE PES CHAPTER- IEEE-RIT Student Branch | IEEE Ramaiah Institute of Technology"
        />
      </Head>
      <Header />
      <main>
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-6xl py-4 sm:py-6 lg:py-8">
            <div className="">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-10">
                IEEE PES CHAPTER
              </h1>

              <Swiper
                spaceBetween={30}
                effect={'fade'}
                loop={true}
                autoHeight={true}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation, EffectFade]}
                className="mySwiper"
              >
                {images.map((image, index) => (
                  <SwiperSlide key={index}>
                    <Image
                      className="lg:h-128 h-96 w-full object-fill"
                      src={image}
                      alt={index}
                      width={1745}
                      height={800}
                      objectFit="cover"
                      border-radius="10px"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              <div>
                <h1 className="mt-10 text-justify text-lg lg:text-xl tracking-tight text-gray-900">
                  IEEE Power and Energy Society Chapter is a professional
                  society for electrical engineers who work in the power and
                  energy industry. It provides members with access to
                  educational resources, networking opportunities, and
                  professional development opportunities. The IEEE Power and
                  Energy Society (PES) is a leading non-profit organization
                  driven by volunteers worldwide. Its mission is to be the
                  leading provider of scientific and engineering information on
                  electric power and energy for the betterment of society. A PES
                  Chapter is a technical sub-unit of one or more IEEE Sections
                  and consists of PES members who share technical interests and
                  geographical proximity. Chapters provide PES members with the
                  opportunity to meet and learn from fellow IEEE members. As of
                  January 2023, PES has 800+ global chapters made up of
                  Professional Chapters and Student Branch Chapters.
                </h1>
              </div>

              <h1 className="my-10 text-2xl font-bold tracking-tight text-gray-900">
                Members
              </h1>

              <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">

                <Member name="Affan Ahamed B"
                  designation="Chair"
                  link="https://www.linkedin.com/in/affan-ahamed-b-1890b9279"
                  image="https://github.com/sanjay212003/ieee-members/blob/main/PES/Affan%20Ahamed_1MS21EE004.jpg?raw=true">
                </Member>

                <Member name="M Subiksha"
                  designation="Vice-Chair"
                  link="https://www.linkedin.com/in/m-subiksha-377305279"
                  image="https://github.com/sanjay212003/ieee-members/blob/main/PES/M%20SUBIKSHA%201MS22EE027_.jpg?raw=true">
                </Member>

                <Member name="Divya Naidu K"
                  designation="Member"
                  link="https://www.linkedin.com/in/divya-naidu-11489b244"
                  image="https://github.com/sanjay212003/ieee-members/blob/main/PES/Divya%20Naidu%20(1MS22EE015)_.jpg?raw=true">
                </Member>

                <Member name="Bhagyashri Rasal"
                  designation="Member"
                  link="https://www.linkedin.com/in/bhagyashri-rasal-a7622525b"
                  image="https://github.com/sanjay212003/ieee-members/blob/main/PES/BHAGYASHRI%20RASAL(1MS22EE010).jpg?raw=true">
                </Member>

                <Member name="Ashlesh D M"
                  designation="Member"
                  link="https://www.linkedin.com/in/dheeran-ashlesh-a8ab53212?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                  image="https://github.com/sanjay212003/ieee-members/blob/main/PES/Ashlesh%20D%20M.jpg?raw=true">
                </Member>
                <Member name="Athul Biju C"
                  designation="Member"
                  link="https://www.linkedin.com/in/athul-biju-c-0268652b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                  image="https://github.com/sanjay212003/ieee-members/blob/main/PES/Athul%20Biju%20C_1MS23EE009-T.JPG?raw=true">
                </Member>
                <Member name="Juel Pramanik"
                  designation="Member"
                  link="https://www.linkedin.com/in/juel-pramanik-819a342a7"
                  image="https://github.com/sanjay212003/ieee-members/blob/main/PES/Juel%20Pramanik_1MS22EE022.jpg?raw=true">
                </Member>
                <Member name="Sankalp Kumar Singh"
                  designation="Member"
                  link="https://www.linkedin.com/in/sankalp-singh-8913552b2"
                  image="https://github.com/sanjay212003/ieee-members/blob/main/PES/Sankalp%20Kumar%20Singh(1MS22EE045).jpg?raw=true">
                </Member>
                <Member name="Srajan"
                  designation="Member"
                  link="https://www.linkedin.com/in/srajan-poojari-55334b2b2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  image="https://github.com/sanjay212003/ieee-members/blob/main/PES/Srajan_1MS22EE056.jpg?raw=true">
                </Member>
                <Member name="Yathish P"
                  designation="Member"
                  link="https://www.linkedin.com/in/yathish-virat-7a38b9282?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app "
                  image="https://github.com/sanjay212003/ieee-members/blob/main/PES/Yathish.PNG?raw=true">
                </Member>
                <Member name="venu gopal"
                  designation="Member"
                  link="https://www.linkedin.com/in/venu-gopal-9bb371284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                  image="https://github.com/sanjay212003/ieee-members/blob/main/PES/venu%20gopal%20_%201MS23EI016-T.pdf?raw=true">
                </Member>
                <Member name="Manish Bennalli"
                  designation="Member"
                  link="https://www.linkedin.com/in/manish-bennalli-9563502b2 "
                  image="https://github.com/sanjay212003/ieee-members/blob/main/PES/venu%20gopal%20_%201MS23EI016-T.pdf?raw=true">
                </Member>
              </div>

              <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                  href="#"
                  className="text-sm font-semibold leading-6 text-gray-900"
                >
                  Learn more <span aria-hidden="true">→</span>
                </a>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
