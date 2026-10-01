import {getPosterUrl} from '../api/config'

const CastCard = ({member}) => {
  const imageUrl = getPosterUrl(member.profile_path)

  return (
    <div className="cast-card">
      {imageUrl ? (
        <img src={imageUrl} alt={member.original_name} />
      ) : (
        <div className="cast-card__empty">No Image</div>
      )}
      <p className="cast-card__name">{member.original_name}</p>
      <p className="cast-card__character">{member.character}</p>
    </div>
  )
}

export default CastCard
