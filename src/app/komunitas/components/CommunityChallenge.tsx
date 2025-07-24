"use client";
import { useState } from "react";
import {
  Target,
  Calendar,
  Users,
  Trophy,
  Clock,
  Star,
  Filter,
} from "lucide-react";

interface Challenge {
  id: number;
  title: string;
  description: string;
  category: string;
  difficulty: "Mudah" | "Sedang" | "Sulit";
  duration: string;
  participants: number;
  maxParticipants: number;
  reward: string;
  deadline: string;
  progress: number;
  status: "active" | "completed" | "upcoming";
  icon: string;
  color: string;
  tags: string[];
}

const challenges: Challenge[] = [
  {
    id: 1,
    title: "Zero Waste Week Challenge",
    description:
      "Tantangan untuk mengurangi sampah hingga nol selama satu minggu penuh dengan dokumentasi harian",
    category: "Lifestyle",
    difficulty: "Sedang",
    duration: "7 hari",
    participants: 234,
    maxParticipants: 500,
    reward: "Badge Eco Warrior + 500 poin",
    deadline: "2024-08-15",
    progress: 47,
    status: "active",
    icon: "🌱",
    color: "green",
    tags: ["Zero Waste", "Daily Challenge", "Documentation"],
  },
  {
    id: 2,
    title: "DIY Upcycling Contest",
    description:
      "Buat produk berguna dari barang bekas dan menangkan hadiah menarik untuk kreativitas terbaik",
    category: "Kreativitas",
    difficulty: "Sulit",
    duration: "14 hari",
    participants: 156,
    maxParticipants: 200,
    reward: "Hadiah Rp 1.000.000 + Featured",
    deadline: "2024-08-20",
    progress: 78,
    status: "active",
    icon: "🎨",
    color: "purple",
    tags: ["DIY", "Upcycling", "Contest", "Creative"],
  },
  {
    id: 3,
    title: "Plastic Free July",
    description:
      "Bergabunglah dengan gerakan global untuk menghindari plastik sekali pakai selama bulan Juli",
    category: "Environmental",
    difficulty: "Mudah",
    duration: "30 hari",
    participants: 445,
    maxParticipants: 1000,
    reward: "Certificate + 300 poin",
    deadline: "2024-07-31",
    progress: 89,
    status: "active",
    icon: "🚫",
    color: "blue",
    tags: ["Plastic Free", "Global Movement", "Monthly"],
  },
  {
    id: 4,
    title: "Community Garden Project",
    description:
      "Mari bersama-sama membuat taman komunitas untuk memproduksi makanan organik lokal",
    category: "Community",
    difficulty: "Sedang",
    duration: "60 hari",
    participants: 89,
    maxParticipants: 150,
    reward: "Fresh Produce + 400 poin",
    deadline: "2024-09-30",
    progress: 23,
    status: "active",
    icon: "🌿",
    color: "emerald",
    tags: ["Gardening", "Community", "Organic", "Long-term"],
  },
  {
    id: 5,
    title: "Eco Education Workshop",
    description:
      "Workshop mendatang tentang sustainable living dan praktik ramah lingkungan untuk pemula",
    category: "Education",
    difficulty: "Mudah",
    duration: "3 hari",
    participants: 0,
    maxParticipants: 100,
    reward: "Certificate + 200 poin",
    deadline: "2024-08-25",
    progress: 0,
    status: "upcoming",
    icon: "📚",
    color: "yellow",
    tags: ["Workshop", "Education", "Beginner", "Sustainable"],
  },
  {
    id: 6,
    title: "Beach Cleanup Marathon",
    description:
      "Tantangan yang telah selesai: membersihkan 5 pantai dalam sebulan dengan 500+ volunteer",
    category: "Action",
    difficulty: "Sedang",
    duration: "30 hari",
    participants: 523,
    maxParticipants: 500,
    reward: "Hero Badge + 600 poin",
    deadline: "2024-07-15",
    progress: 100,
    status: "completed",
    icon: "🏖️",
    color: "cyan",
    tags: ["Cleanup", "Beach", "Volunteer", "Completed"],
  },
];

const categories = [
  "Semua",
  "Lifestyle",
  "Kreativitas",
  "Environmental",
  "Community",
  "Education",
  "Action",
];
const difficulties = ["Semua", "Mudah", "Sedang", "Sulit"];

export default function CommunityChallenge() {
  const [selectedCategory, setSelectedCategory] = useState("Semua");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Semua");
  const [selectedStatus, setSelectedStatus] = useState<
    "all" | "active" | "upcoming" | "completed"
  >("all");

  const filteredChallenges = challenges.filter((challenge) => {
    const categoryMatch =
      selectedCategory === "Semua" || challenge.category === selectedCategory;
    const difficultyMatch =
      selectedDifficulty === "Semua" ||
      challenge.difficulty === selectedDifficulty;
    const statusMatch =
      selectedStatus === "all" || challenge.status === selectedStatus;
    return categoryMatch && difficultyMatch && statusMatch;
  });

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: {
        bg: "bg-green-500",
        light: "bg-green-100",
        text: "text-green-600",
        border: "border-green-200",
      },
      purple: {
        bg: "bg-purple-500",
        light: "bg-purple-100",
        text: "text-purple-600",
        border: "border-purple-200",
      },
      blue: {
        bg: "bg-blue-500",
        light: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
      },
      emerald: {
        bg: "bg-emerald-500",
        light: "bg-emerald-100",
        text: "text-emerald-600",
        border: "border-emerald-200",
      },
      yellow: {
        bg: "bg-yellow-500",
        light: "bg-yellow-100",
        text: "text-yellow-600",
        border: "border-yellow-200",
      },
      cyan: {
        bg: "bg-cyan-500",
        light: "bg-cyan-100",
        text: "text-cyan-600",
        border: "border-cyan-200",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.green;
  };

  const getDifficultyColor = (difficulty: string) => {
    const colors = {
      Mudah: "bg-green-100 text-green-700 border-green-200",
      Sedang: "bg-yellow-100 text-yellow-700 border-yellow-200",
      Sulit: "bg-red-100 text-red-700 border-red-200",
    };
    return colors[difficulty as keyof typeof colors];
  };

  const getStatusColor = (status: string) => {
    const colors = {
      active: "bg-green-100 text-green-700 border-green-200",
      upcoming: "bg-blue-100 text-blue-700 border-blue-200",
      completed: "bg-gray-100 text-gray-700 border-gray-200",
    };
    return colors[status as keyof typeof colors];
  };

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-100 px-4 py-2 rounded-full mb-6">
            <Target className="w-5 h-5 text-green-600 animate-pulse" />
            <span className="text-green-700 font-medium text-sm">
              Community Challenges
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Tantangan <span className="text-green-600">Komunitas</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Bergabunglah dengan tantangan seru dan buat dampak positif bersama
            komunitas Sampedia! Raih poin, badge, dan hadiah menarik.
          </p>
        </div>

        {/* Filters - Responsive 2x2 Grid */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Filter className="w-5 h-5 text-gray-600" />
            <span className="font-semibold text-gray-800">
              Filter Tantangan
            </span>
          </div>

          <div className="grid grid-cols-2 gap-4 md:gap-6">
            {/* Category Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kategori
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Difficulty Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Kesulitan
              </label>
              <select
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              >
                {difficulties.map((difficulty) => (
                  <option key={difficulty} value={difficulty}>
                    {difficulty}
                  </option>
                ))}
              </select>
            </div>

            {/* Status Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value as any)}
                className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
              >
                <option value="all">Semua Status</option>
                <option value="active">Aktif</option>
                <option value="upcoming">Akan Datang</option>
                <option value="completed">Selesai</option>
              </select>
            </div>

            {/* Quick Stats */}
            <div className="bg-green-50 border border-green-200 rounded-xl p-3">
              <div className="text-center">
                <div className="text-lg font-bold text-green-600 mb-1">
                  {filteredChallenges.length}
                </div>
                <div className="text-xs text-green-700">Tantangan Tersedia</div>
              </div>
            </div>
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredChallenges.map((challenge) => {
            const colors = getColorClasses(challenge.color);
            const participationRate =
              (challenge.participants / challenge.maxParticipants) * 100;

            return (
              <div
                key={challenge.id}
                className={`bg-white rounded-3xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                  challenge.status === "completed" ? "opacity-75" : ""
                }`}
              >
                {/* Card Header */}
                <div
                  className={`${colors.light} p-4 md:p-6 border-b ${colors.border}`}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl md:text-3xl">
                        {challenge.icon}
                      </span>
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-1 leading-tight">
                          {challenge.title}
                        </h3>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                            challenge.status
                          )}`}
                        >
                          {challenge.status === "active" && "🟢 Aktif"}
                          {challenge.status === "upcoming" && "🔵 Akan Datang"}
                          {challenge.status === "completed" && "✅ Selesai"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-700 text-sm leading-relaxed mb-4">
                    {challenge.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {challenge.tags.slice(0, 2).map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-white/80 text-gray-600 rounded-full text-xs border border-gray-200"
                      >
                        {tag}
                      </span>
                    ))}
                    {challenge.tags.length > 2 && (
                      <span className="px-2 py-1 bg-white/80 text-gray-500 rounded-full text-xs border border-gray-200">
                        +{challenge.tags.length - 2}
                      </span>
                    )}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4 md:p-6">
                  {/* Challenge Info */}
                  <div className="grid grid-cols-2 gap-3 mb-4">
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <Clock className="w-4 h-4 text-gray-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Durasi</div>
                      <div className="text-sm font-semibold text-gray-800">
                        {challenge.duration}
                      </div>
                    </div>
                    <div className="text-center p-2 bg-gray-50 rounded-lg">
                      <Users className="w-4 h-4 text-gray-600 mx-auto mb-1" />
                      <div className="text-xs text-gray-600">Peserta</div>
                      <div className="text-sm font-semibold text-gray-800">
                        {challenge.participants}/{challenge.maxParticipants}
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  {challenge.status === "active" && (
                    <div className="mb-4">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-gray-600">Progress</span>
                        <span className="text-xs font-semibold text-gray-800">
                          {challenge.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div
                          className={`${colors.bg} h-2 rounded-full transition-all duration-500`}
                          style={{ width: `${challenge.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  )}

                  {/* Participation Rate */}
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-xs text-gray-600">Partisipasi</span>
                      <span className="text-xs font-semibold text-gray-800">
                        {Math.round(participationRate)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-blue-500 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${participationRate}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Difficulty & Category */}
                  <div className="flex gap-2 mb-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium border ${getDifficultyColor(
                        challenge.difficulty
                      )}`}
                    >
                      {challenge.difficulty}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium border border-gray-200">
                      {challenge.category}
                    </span>
                  </div>

                  {/* Reward */}
                  <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <div className="flex items-center gap-2 mb-1">
                      <Trophy className="w-4 h-4 text-yellow-600" />
                      <span className="text-xs font-semibold text-yellow-800">
                        Reward
                      </span>
                    </div>
                    <p className="text-xs text-yellow-700">
                      {challenge.reward}
                    </p>
                  </div>

                  {/* Deadline */}
                  <div className="flex items-center gap-2 mb-4 text-xs text-gray-600">
                    <Calendar className="w-4 h-4" />
                    <span>
                      Deadline:{" "}
                      {new Date(challenge.deadline).toLocaleDateString("id-ID")}
                    </span>
                  </div>

                  {/* Action Button */}
                  <button
                    className={`w-full py-3 px-4 rounded-xl font-medium transition-all duration-300 text-sm ${
                      challenge.status === "active"
                        ? `${colors.bg} text-white hover:opacity-90 hover:scale-105`
                        : challenge.status === "upcoming"
                        ? "bg-blue-500 text-white hover:bg-blue-600 hover:scale-105"
                        : "bg-gray-300 text-gray-600 cursor-not-allowed"
                    }`}
                    disabled={challenge.status === "completed"}
                  >
                    {challenge.status === "active" && "Ikuti Tantangan"}
                    {challenge.status === "upcoming" && "Daftar Sekarang"}
                    {challenge.status === "completed" && "Tantangan Selesai"}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-green-100 to-blue-100 border border-green-200 rounded-3xl p-6 md:p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-4">
              <div className="w-12 h-12 md:w-16 md:h-16 bg-green-500 rounded-2xl flex items-center justify-center">
                <Star className="w-6 h-6 md:w-8 md:h-8 text-white" />
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4">
              Punya Ide Tantangan Baru?
            </h3>

            <p className="text-base md:text-lg text-gray-700 leading-relaxed max-w-2xl mx-auto mb-6">
              Bagikan ide tantangan kreatifmu dengan komunitas! Mari
              bersama-sama menciptakan aksi positif yang lebih besar untuk
              lingkungan.
            </p>

            <button className="bg-green-500 text-white px-6 md:px-8 py-3 rounded-full font-medium hover:bg-green-600 transition-all duration-300 hover:scale-105 text-sm md:text-base">
              Usulkan Tantangan Baru
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
