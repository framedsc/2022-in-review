import React from "react";

export interface Author {
  authorid: string;
  authorNick: string;
  authorsAvatarUrl: string;
  socials: string[];
}

export interface LeaderboardEntry {
  id: string;
  avatar: string;
  name: string;
  score: number;
}

const defaultAvatar = "default_avatar.png";
const medalIcons = ['🥇', '🥈', '🥉'];

const Leaderboard = (props: {leaderboardData: LeaderboardEntry[], isWindowARVertical: boolean}) => {
  return (
    <div
      className="max-w-md mx-auto rounded-lg p-6"
      style={{
        minWidth: props.isWindowARVertical ? '350px' : '600px',
        backgroundColor: 'transparent',
      }}
    >
      <ul>
        {props.leaderboardData.map((entry, index) => {
          const isTopThree = index < 3;
          return (
            <li
              key={entry.id}
              className={`rounded-lg mb-2 ${
                index % 2 === 0 ? 'bg-framed-gray' : 'bg-framed-gray'
              } hover:bg-framed-legacy`}
            >
              <a
                href={`https://framedsc.com/HallOfFramed/?author=${entry.name}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-4"
              >
                <div className="flex items-center">
                  <span className="mr-2 text-xl text-center	font-bold text-framed-white" style = { {minWidth: "30px"} }>
                    {isTopThree ? medalIcons[index] : index + 1}
                  </span>
                  <img
                    src={entry.avatar}
                    alt={`${entry.name}'s avatar`}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = defaultAvatar;
                    }}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <span className="text-framed-white font-semibold">{entry.name}</span>
                </div>
                <span className="text-framed-white font-semibold" style = { {marginRight: "10px"} }>{entry.score}</span>
              </a>
            </li>
          );
        })}
      </ul>

      <style jsx>{`
        .glow {
          box-shadow: 0 0 10px rgba(255, 223, 0, 0.8); /* Gold glow effect */
        }
      `}</style>
    </div>
  );
};

export default Leaderboard;
