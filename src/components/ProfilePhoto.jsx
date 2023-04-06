const ProfilePhoto = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[40%] border-2 border-[#fea02a] rounded-full min-h-16 h-2/4">
        <img
          className="rounded-full aspect-[6/2] object-cover"
          src="Dozie-profile-pix.jpg"
          alt="profile-pix"
        />
      </div>
    </div>
  )
}

export default ProfilePhoto;