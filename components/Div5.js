import styles from '../styles/Home.module.css'

export default function Div5() {
    return(
        <section className='bg-black py-10 px-5'>
            {/* CONTENT */}
            <div className='text-white text-center'>
                <h1 className='font-bold text-[1.7rem]'>Create profiles for children.</h1>
                <p className='text-[1.2rem]'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>

            {/* IMAGE */}
            <div>
                <img src='/div5_img.png' alt='children_image'/>
            </div>
        </section>
    )
}


