const ProfilePhoto = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[40%] border-2 border-[#fea02a] rounded-full min-h-16 h-2/4 lg:w-[20%] md:w-[30%]">
        <img
          className="rounded-full aspect-[4/5] object-cover"
          src="Dozie-profile-pix.jpg"
          alt="profile-pix"
        />
      </div>
    </div>
  )
}

export default ProfilePhoto;