import profileImg from "../../assets/370233704_357378639996588_1615738251909673700_n.jpg";
import useGetData from "../../hooks/useGetData";
import Links from "../shared/links/Links";
import style from "./index.module.scss";
const ProfileCard = () => {
  const { data, loading, error } = useGetData(
    `${import.meta.env.VITE_DOMAIN}/api/main-info?populate=*`
  );
  console.log(data?.attributes.profile_image.data.attributes.formats.large.url);
  const profile_image =
    data?.attributes.profile_image.data.attributes.formats.large.url;
  return (
    <div className={style.container}>
      <div className={style.top}>
        <img src={`${import.meta.env.VITE_DOMAIN}${profile_image}`} />
      </div>
      <h2>Mostafa Nasser</h2>
      <Links
        facebook={data?.attributes.facebook}
        instagram={data?.attributes.instagram}
        linkedIn={data?.attributes.linkedIn}
      />
    </div>
  );
};

export default ProfileCard;
