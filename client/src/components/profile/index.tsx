import React, { useEffect, useState } from 'react';
import { fetchProfile } from '../../api/profile';
import { getToken } from '../../utils/get-token';

const Profile: React.FC = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const getProfile = async () => {
      const token = getToken();
      if (token) {
        try {
          const data = await fetchProfile(token);
          setUserId(data.userId);
        } catch (error: any) {
          alert(error.message);
          window.location.href = '/login';
        }
      } else {
        window.location.href = '/register';
      }
    };

    getProfile();
  }, []);

  return (
    <div className="profile">
      <h2>Личный кабинет</h2>
      {userId && <p>ID пользователя: {userId}</p>}
    </div>
  );
};

export default Profile;
