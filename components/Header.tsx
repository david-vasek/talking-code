import Link from 'next/link'

function Header() {
  return (
    <header className="mx-auto flex max-w-7xl justify-between p-5">
      <div className="flex items-center space-x-5 ">
        <Link href="/">
          <img
            className="w-44 cursor-pointer object-contain transition-transform duration-200 ease-in-out hover:scale-105"
            src="https://lh3.googleusercontent.com/dUALojmLV1rCFG9xJUWgvPyDdyP3FH9FWog37fWkpGh-Q6fCEXuaAlv9br1GRFnirU6MYIqULk2QD-7oE4zyrXdDcO3kPwnnAhRBNN6g2XHChyQY6pzncK5b_e1feMJXw9susVIdy0pqo_dVYHZkizje7dWNHlx69ePqk0NQcrRBLbHOeb_tDn2c0J8iXe9h5OxgJ4TKITkpd5PeQo0o5VdEKjI20H2SAudHX7evlO79DZgUlnPbX7A0kjU1sTl17ES4IGAc-W78hGlJt7KWz4V8FlLPEfGyFdVebtvNQAMX_gKtEjmX9Owf6GJqhpdXBd4Ij__snunHD-RYICeHEazvzVzf-oX11wkbspMXOzg0R9Sa8mUAhuhx4y8aC7UWeS7tZXvSFs7GCpdOyAgS_KIKxycdJkC_mK2Rt_bTB3WAXh8t8wB8iUjoE8Yg2SMBpM-SDZ9j5UmFkKekte0BHU3Hzc0dlq6ReYv2hFxJYFgVJFG72obKl2vCWDndIAA0dn9E82qi172zUMBLwUsyuV8SAVTNX8_NBQIzH2t42WZsdVpopSuH5UnEbmdN9wRhB5YUqycP7UKvwZZN2iB2mTMegPmvh3atsgI8GDy09uc2594CB8Ywoonlas9YIYmBOPeCyARY-dqUv3UlnI9fMGtHdDAqQlJJen0P5zLZkvxXuZhHndMBKTiRsO5grWtfpUcBVfYFHUxutrYaOgKZXw=w217-h79-no?authuser=0"
            alt="Blog Logo"
          />
        </Link>
        <div className="hidden items-center space-x-5 px-5 md:inline-flex">
          <h3 className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105">
            About
          </h3>
          <h3 className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105">
            Contact
          </h3>
          <h3 className="cursor-pointer rounded-full bg-gray-700 px-4 py-1 text-white transition-transform duration-200 ease-in-out hover:scale-105">
            Follow
          </h3>
        </div>
      </div>
      <div className="flex items-center space-x-5 text-gray-700">
        <h3 className="cursor-pointer transition-transform duration-200 ease-in-out hover:scale-105">
          Sign In
        </h3>
        <h3 className="cursor-pointer rounded-full border bg-gray-700 px-4 py-1 text-white transition-transform duration-200 ease-in-out hover:scale-105">
          Get Started
        </h3>
      </div>
    </header>
  )
}

export default Header
