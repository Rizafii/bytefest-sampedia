"use client";
import { useState } from "react";
import {
  Trophy,
  Medal,
  Crown,
  Star,
  TrendingUp,
  Award,
  Users,
  Target,
  Zap,
} from "lucide-react";

interface LeaderboardUser {
  id: number;
  rank: number;
  name: string;
  avatar: string;
  points: number;
  level: number;
  badges: string[];
  streak: number;
  completedChallenges: number;
  joinDate: string;
  isCurrentUser?: boolean;
}

const leaderboardData: LeaderboardUser[] = [
  {
    id: 1,
    rank: 1,
    name: "Sarah Eco Warrior",
    avatar: "https://i.pravatar.cc/150?img=1",
    points: 15420,
    level: 25,
    badges: ["🏆", "🌱", "♻️", "🌟"],
    streak: 45,
    completedChallenges: 28,
    joinDate: "Jan 2024",
  },
  {
    id: 2,
    rank: 2,
    name: "Budi Green Master",
    avatar: "https://i.pravatar.cc/150?img=3",
    points: 14890,
    level: 24,
    badges: ["🥈", "🌿", "🔋", "💚"],
    streak: 38,
    completedChallenges: 25,
    joinDate: "Feb 2024",
  },
  {
    id: 3,
    rank: 3,
    name: "Rina Sustainability",
    avatar: "https://i.pravatar.cc/150?img=9",
    points: 13750,
    level: 22,
    badges: ["🥉", "🌍", "🌱", "⭐"],
    streak: 32,
    completedChallenges: 22,
    joinDate: "Jan 2024",
  },
  {
    id: 4,
    rank: 4,
    name: "Andi Zero Waste",
    avatar: "https://i.pravatar.cc/150?img=7",
    points: 12340,
    level: 20,
    badges: ["🌟", "♻️", "🌿"],
    streak: 28,
    completedChallenges: 19,
    joinDate: "Mar 2024",
  },
  {
    id: 5,
    rank: 5,
    name: "Kamu",
    avatar: "https://i.pravatar.cc/150?img=5",
    points: 8750,
    level: 15,
    badges: ["🌱", "♻️"],
    streak: 15,
    completedChallenges: 12,
    joinDate: "Apr 2024",
    isCurrentUser: true,
  },
];

const achievements = [
  {
    title: "Top Contributor",
    description: "Member dengan kontribusi terbanyak bulan ini",
    icon: "👑",
    winner: "Sarah Eco Warrior",
    points: "2,450 poin",
  },
  {
    title: "Challenge Master",
    description: "Menyelesaikan tantangan terbanyak",
    icon: "🏆",
    winner: "Budi Green Master",
    points: "28 tantangan",
  },
  {
    title: "Streak Champion",
    description: "Aktivitas harian terpanjang",
    icon: "🔥",
    winner: "Sarah Eco Warrior",
    points: "45 hari",
  },
];

// Helper function to format numbers consistently
const formatNumber = (num: number): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default function CommunityLeaderboard() {
  const [activeTab, setActiveTab] = useState<"monthly" | "weekly" | "alltime">(
    "monthly"
  );
  const [hoveredUser, setHoveredUser] = useState<number | null>(null);

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Medal className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Award className="w-6 h-6 text-amber-600" />;
      default:
        return (
          <span className="w-6 h-6 flex items-center justify-center text-gray-600 font-bold">
            {rank}
          </span>
        );
    }
  };

  const getRankBg = (rank: number, isCurrentUser?: boolean) => {
    if (isCurrentUser) {
      return "bg-gradient-to-r from-blue-100 to-indigo-100 border-blue-300";
    }
    switch (rank) {
      case 1:
        return "bg-gradient-to-r from-yellow-100 to-amber-100 border-yellow-300";
      case 2:
        return "bg-gradient-to-r from-gray-100 to-slate-100 border-gray-300";
      case 3:
        return "bg-gradient-to-r from-amber-100 to-orange-100 border-amber-300";
      default:
        return "bg-white border-gray-200";
    }
  };

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <Trophy className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-blue-700 font-medium text-sm">
              Leaderboard
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Papan <span className="text-blue-600">Peringkat</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Lihat siapa yang paling aktif dan berprestasi dalam komunitas kita!
            Raih poin dan naik peringkat dengan berpartisipasi aktif.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-200">
            <div className="flex gap-2">
              {[
                { id: "monthly", label: "Bulan Ini", icon: TrendingUp },
                { id: "weekly", label: "Minggu Ini", icon: Zap },
                { id: "alltime", label: "Sepanjang Masa", icon: Crown },
              ].map((tab) => {
                const Icon = tab.icon;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`flex items-center gap-2 px-3 md:px-6 py-3 rounded-xl font-medium transition-all duration-300 text-xs md:text-sm ${
                      activeTab === tab.id
                        ? "bg-blue-500 text-white shadow-lg"
                        : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="hidden sm:inline">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Main Leaderboard */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 md:p-6 border-b border-gray-100">
                <h3 className="text-lg md:text-xl font-bold text-gray-800 flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Top Contributors
                </h3>
              </div>

              <div className="divide-y divide-gray-100">
                {leaderboardData.map((user, index) => (
                  <div
                    key={user.id}
                    className={`p-3 md:p-6 transition-all duration-300 cursor-pointer ${getRankBg(
                      user.rank,
                      user.isCurrentUser
                    )} ${hoveredUser === user.id ? "scale-102 shadow-md" : ""}`}
                    onMouseEnter={() => setHoveredUser(user.id)}
                    onMouseLeave={() => setHoveredUser(null)}
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      {/* Rank */}
                      <div className="flex-shrink-0 w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
                        {getRankIcon(user.rank)}
                      </div>

                      {/* Avatar */}
                      <div className="relative">
                        <img
                          src={user.avatar || "/placeholder.svg"}
                          alt={user.name}
                          className="w-12 h-12 md:w-16 md:h-16 rounded-full object-cover border-4 border-white shadow-sm"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-blue-500 text-white text-xs px-1.5 md:px-2 py-0.5 md:py-1 rounded-full font-bold">
                          {user.level}
                        </div>
                      </div>

                      {/* User Info */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-gray-800 text-sm md:text-lg truncate">
                            {user.name}
                            {user.isCurrentUser && (
                              <span className="ml-2 text-blue-600 text-xs md:text-sm">
                                (Kamu)
                              </span>
                            )}
                          </h4>
                        </div>

                        <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-xs md:text-sm text-gray-600 mb-2">
                          <span className="flex items-center gap-1">
                            <Star className="w-3 h-3 md:w-4 md:h-4" />
                            {formatNumber(user.points)} poin
                          </span>
                          <span className="flex items-center gap-1">
                            <Target className="w-3 h-3 md:w-4 md:h-4" />
                            {user.completedChallenges} tantangan
                          </span>
                          <span className="flex items-center gap-1">
                            <Zap className="w-3 h-3 md:w-4 md:h-4" />
                            {user.streak} hari streak
                          </span>
                        </div>

                        {/* Badges */}
                        <div className="flex gap-1">
                          {user.badges.map((badge, badgeIndex) => (
                            <span
                              key={badgeIndex}
                              className="text-sm md:text-lg hover:scale-110 transition-transform cursor-pointer"
                              title="Badge"
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Points Display */}
                      <div className="text-right">
                        <div className="text-lg md:text-2xl font-bold text-gray-800">
                          #{user.rank}
                        </div>
                        <div className="text-xs md:text-sm text-gray-500">
                          Bergabung {user.joinDate}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Sidebar */}
          <div className="space-y-6">
            {/* Monthly Achievements */}
            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Award className="w-5 h-5 text-purple-500" />
                Pencapaian Bulan Ini
              </h3>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="p-3 md:p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100"
                  >
                    <div className="flex items-start gap-3">
                      <span className="text-xl md:text-2xl">
                        {achievement.icon}
                      </span>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-gray-800 text-sm md:text-base mb-1">
                          {achievement.title}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-600 mb-2">
                          {achievement.description}
                        </p>
                        <div className="text-xs text-purple-600 font-medium">
                          🏆 {achievement.winner} - {achievement.points}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-4 md:p-6 border border-green-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-green-600" />
                Quick Actions
              </h3>

              <div className="space-y-3">
                <button className="w-full bg-white text-gray-800 py-2 md:py-3 px-3 md:px-4 rounded-xl font-medium hover:bg-gray-50 transition-colors text-sm md:text-base">
                  Lihat Profil Lengkap
                </button>
                <button className="w-full bg-green-500 text-white py-2 md:py-3 px-3 md:px-4 rounded-xl font-medium hover:bg-green-600 transition-colors text-sm md:text-base">
                  Ikuti Tantangan Baru
                </button>
                <button className="w-full bg-blue-500 text-white py-2 md:py-3 px-3 md:px-4 rounded-xl font-medium hover:bg-blue-600 transition-colors text-sm md:text-base">
                  Undang Teman
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
