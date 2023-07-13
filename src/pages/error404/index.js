import React from 'react'

export default function Error404Screen() {
  return (
    <div>
      <div  className='border h-96 flex justify-end overflow-hidden'> 
        <model-viewer class="border border-red-900 w-[30%] h-full "  src="/V.gltf" autoplay shadow-intesity="1" alt="VR Headset" auto-rotate camera-controls arios-src="/pyramid.gltf"></model-viewer>
      </div>
    </div>
  )
}
