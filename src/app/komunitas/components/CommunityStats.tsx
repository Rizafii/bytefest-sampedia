"use client";
import { useState } from "react";
import {
  Users,
  MessageCircle,
  TrendingUp,
  Target,
  Zap,
  Star,
  Heart,
  Globe,
  Recycle,
} from "lucide-react";

interface StatCard {
  id: string;
  title: string;
  value: string;
  change: string;
  changeType: "increase" | "decrease" | "neutral";
  icon: any;
  color: string;
  description: string;
}

const statsData: StatCard[] = [
  {
    id: "members",
    title: "Total Anggota",
    value: "12,847",
    change: "+234 minggu ini",
    changeType: "increase",
    icon: Users,
    color: "blue",
    description: "Komunitas yang terus berkembang",
  },
  {
    id: "discussions",
    title: "Diskusi Aktif",
    value: "1,456",
    change: "+89 hari ini",
    changeType: "increase",
    icon: MessageCircle,
    color: "green",
    description: "Percakapan yang bermakna",
  },
  {
    id: "challenges",
    title: "Tantangan Selesai",
    value: "8,923",
    change: "+156 minggu ini",
    changeType: "increase",
    icon: Target,
    color: "purple",
    description: "Aksi nyata untuk lingkungan",
  },
  {
    id: "impact",
    title: "Dampak CO₂ Dikurangi",
    value: "45.2 ton",
    change: "+2.1 ton bulan ini",
    changeType: "increase",
    icon: Globe,
    color: "emerald",
    description: "Kontribusi nyata untuk bumi",
  },
];

const quickStats = [
  {
    label: "Anggota Online",
    value: "2,341",
    icon: "🟢",
    color: "text-green-600",
  },
  {
    label: "Post Hari Ini",
    value: "127",
    icon: "📝",
    color: "text-blue-600",
  },
  {
    label: "Tantangan Aktif",
    value: "23",
    icon: "🎯",
    color: "text-purple-600",
  },
  {
    label: "Badge Diraih",
    value: "1,892",
    icon: "🏆",
    color: "text-yellow-600",
  },
];

const trendingTopics = [
  { topic: "Zero Waste Challenge", posts: 234, trend: "up" },
  { topic: "DIY Eco Products", posts: 189, trend: "up" },
  { topic: "Sustainable Living", posts: 156, trend: "up" },
  { topic: "Plastic Free July", posts: 143, trend: "up" },
  { topic: "Community Garden", posts: 98, trend: "neutral" },
];

export default function CommunityStats() {
  const [selectedPeriod, setSelectedPeriod] = useState<
    "week" | "month" | "year"
  >("month");

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: {
        bg: "bg-blue-500",
        light: "bg-blue-100",
        text: "text-blue-600",
        border: "border-blue-200",
      },
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
      emerald: {
        bg: "bg-emerald-500",
        light: "bg-emerald-100",
        text: "text-emerald-600",
        border: "border-emerald-200",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section className="w-full py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full mb-6">
            <TrendingUp className="w-5 h-5 text-blue-600 animate-pulse" />
            <span className="text-blue-700 font-medium text-sm">
              Community Stats
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
            Statistik <span className="text-blue-600">Komunitas</span>
          </h1>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8">
            Lihat perkembangan dan dampak positif yang telah kita ciptakan
            bersama dalam komunitas Sampedia!
          </p>
        </div>

        {/* Period Selector */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-2xl p-2 shadow-sm border border-gray-200">
            <div className="flex gap-2">
              {[
                { id: "week", label: "Minggu Ini" },
                { id: "month", label: "Bulan Ini" },
                { id: "year", label: "Tahun Ini" },
              ].map((period) => (
                <button
                  key={period.id}
                  onClick={() => setSelectedPeriod(period.id as any)}
                  className={`px-3 md:px-6 py-2 md:py-3 rounded-xl font-medium transition-all duration-300 text-xs md:text-sm ${
                    selectedPeriod === period.id
                      ? "bg-blue-500 text-white shadow-lg"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                >
                  {period.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Main Stats Grid - Responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
          {statsData.map((stat) => {
            const Icon = stat.icon;
            const colors = getColorClasses(stat.color);
            return (
              <div
                key={stat.id}
                className={`bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`${colors.bg} p-2 md:p-3 rounded-2xl`}>
                    <Icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                  </div>
                  <div
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      stat.changeType === "increase"
                        ? "bg-green-100 text-green-700"
                        : stat.changeType === "decrease"
                        ? "bg-red-100 text-red-700"
                        : "bg-gray-100 text-gray-700"
                    }`}
                  >
                    {stat.changeType === "increase" && "↗"}
                    {stat.changeType === "decrease" && "↘"}
                    {stat.changeType === "neutral" && "→"}
                  </div>
                </div>

                <div className="mb-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-gray-600 font-medium text-sm md:text-base">
                    {stat.title}
                  </p>
                </div>

                <div className="mb-3">
                  <p className="text-xs md:text-sm text-gray-500 mb-1">
                    {stat.change}
                  </p>
                  <p className="text-xs text-gray-400">{stat.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Quick Stats */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-gray-200 mb-6">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-500" />
                Live Stats
              </h3>

              <div className="space-y-4">
                {quickStats.map((stat, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-lg">{stat.icon}</span>
                      <span className="text-gray-700 font-medium text-sm md:text-base">
                        {stat.label}
                      </span>
                    </div>
                    <span
                      className={`font-bold text-sm md:text-lg ${stat.color}`}
                    >
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Community Pulse */}
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-3xl p-4 md:p-6 border border-green-200">
              <h3 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Community Pulse
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm md:text-base">
                    Engagement Rate
                  </span>
                  <span className="font-bold text-green-600 text-sm md:text-base">
                    94%
                  </span>
                </div>
                <div className="w-full bg-white rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-[94%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm md:text-base">
                    Satisfaction
                  </span>
                  <span className="font-bold text-blue-600 text-sm md:text-base">
                    4.8/5
                  </span>
                </div>
                <div className="w-full bg-white rounded-full h-2">
                  <div className="bg-blue-500 h-2 rounded-full w-[96%]"></div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-gray-700 text-sm md:text-base">
                    Activity Level
                  </span>
                  <span className="font-bold text-purple-600 text-sm md:text-base">
                    High
                  </span>
                </div>
                <div className="w-full bg-white rounded-full h-2">
                  <div className="bg-purple-500 h-2 rounded-full w-[88%]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Trending Topics */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-4 md:p-6 shadow-sm border border-gray-200">
              <h3 className="text-lg md:text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500" />
                Trending Topics
              </h3>

              <div className="space-y-4">
                {trendingTopics.map((topic, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 md:p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3 md:gap-4">
                      <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {index + 1}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 text-sm md:text-base">
                          {topic.topic}
                        </h4>
                        <p className="text-xs md:text-sm text-gray-600">
                          {topic.posts} diskusi aktif
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span
                        className={`text-xs md:text-sm font-medium ${
                          topic.trend === "up"
                            ? "text-green-600"
                            : topic.trend === "down"
                            ? "text-red-600"
                            : "text-gray-600"
                        }`}
                      >
                        {topic.trend === "up" && "↗ Trending"}
                        {topic.trend === "down" && "↘ Menurun"}
                        {topic.trend === "neutral" && "→ Stabil"}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Impact Summary */}
              <div className="mt-8 p-4 md:p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-2xl border border-green-200">
                <h4 className="text-lg font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <Recycle className="w-5 h-5 text-green-600" />
                  Dampak Kolektif Bulan Ini
                </h4>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
                  <div className="text-center">
                    <div className="text-lg md:text-2xl font-bold text-green-600 mb-1">
                      2.1 ton
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      CO₂ Dikurangi
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg md:text-2xl font-bold text-blue-600 mb-1">
                      1,234
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      Aksi Hijau
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg md:text-2xl font-bold text-purple-600 mb-1">
                      567
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      Proyek DIY
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-lg md:text-2xl font-bold text-yellow-600 mb-1">
                      89
                    </div>
                    <div className="text-xs md:text-sm text-gray-600">
                      Komunitas Baru
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
