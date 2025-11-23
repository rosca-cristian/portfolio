const ProfilePicture = ({ src, alt = "Cristian Rosca" }) => {
  return (
    <div className="profile-picture-container">
      {src ? (
        <img
          src={src}
          alt={alt}
          className="profile-picture"
        />
      ) : (
        <div className="profile-picture-placeholder">
          👨‍💻
        </div>
      )}
    </div>
  )
}

export default ProfilePicture
