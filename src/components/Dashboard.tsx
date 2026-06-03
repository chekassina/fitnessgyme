import React from 'react';
import { 
  Users, UserCheck, DollarSign, ShoppingBag, 
  Store, UserPlus, ShoppingCart, CalendarCheck, BarChart3, Activity, Dumbbell, PieChart as PieChartIcon, Package
} from 'lucide-react';
import { cn } from '../lib/utils';
import { RevenueChart } from './RevenueChart';
import { MembershipDistribution } from './MembershipDistribution';
import { RecentActivities } from './RecentActivities';
import { ServiceLinks } from './ServiceLinks';
import { MarketplaceOverview } from './MarketplaceOverview';
import { EcommerceOverview } from './EcommerceOverview';
import { AiInsights } from './AiInsights';
import { TopVendors } from './TopVendors';

export function Dashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      
      {/* Row 1: KPI Cards */}
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Left side: Regular KPIs (3 cards) */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="/members" className="bg-white p-5 rounded-2xl shadow-sm border border-secondary-100 flex flex-col h-28 relative overflow-hidden group hover:border-primary-300 hover:ring-1 hover:ring-primary-500/20 transition-all">
            <div className="flex items-center gap-3 mb-auto">
              <div className="p-2 bg-primary-50 rounded-lg group-hover:bg-primary-100 transition-colors">
                <Users className="w-5 h-5 text-primary-600" />
              </div>
              <p className="text-sm font-bold text-secondary-900">Total Members</p>
            </div>
            <span className="text-xs font-bold text-primary-600 group-hover:translate-x-1 transition-transform">View Details &rarr;</span>
          </a>
          <a href="/members?status=active" className="bg-white p-5 rounded-2xl shadow-sm border border-secondary-100 flex flex-col h-28 relative overflow-hidden group hover:border-emerald-300 hover:ring-1 hover:ring-emerald-500/20 transition-all">
            <div className="flex items-center gap-3 mb-auto">
              <div className="p-2 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
                <UserCheck className="w-5 h-5 text-emerald-600" />
              </div>
              <p className="text-sm font-bold text-secondary-900">Active Members</p>
            </div>
            <span className="text-xs font-bold text-emerald-600 group-hover:translate-x-1 transition-transform">View Details &rarr;</span>
          </a>
          <a href="/trainer-bookings" className="bg-white p-5 rounded-2xl shadow-sm border border-secondary-100 flex flex-col h-28 relative overflow-hidden group hover:border-cyan-300 hover:ring-1 hover:ring-cyan-500/20 transition-all">
            <div className="flex items-center gap-3 mb-auto">
              <div className="p-2 bg-cyan-50 rounded-lg group-hover:bg-cyan-100 transition-colors">
                <CalendarCheck className="w-5 h-5 text-cyan-600" />
              </div>
              <p className="text-sm font-bold text-secondary-900">Trainer Bookings</p>
            </div>
            <span className="text-xs font-bold text-cyan-600 group-hover:translate-x-1 transition-transform">View Details &rarr;</span>
          </a>
        </div>

        {/* Right side: Revenue KPIs (Larger, 3 cards) */}
        <div className="flex-1 lg:flex-[1.5] grid grid-cols-1 sm:grid-cols-3 gap-4">
          <a href="/finance/revenue" className="bg-white p-5 rounded-2xl shadow-sm border border-secondary-200 flex flex-col h-28 relative overflow-hidden group hover:border-blue-400 hover:ring-1 hover:ring-blue-500/20 transition-all">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl group-hover:bg-blue-500/20 transition-colors"></div>
            <div className="flex items-center gap-3 mb-auto z-10">
              <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                <DollarSign className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-sm font-bold text-secondary-900">Monthly Revenue</p>
            </div>
            <span className="text-xs font-bold text-blue-600 group-hover:translate-x-1 transition-transform z-10">View Reports &rarr;</span>
          </a>
          <a href="/store/sales" className="bg-white p-5 rounded-2xl shadow-sm border border-secondary-200 flex flex-col h-28 relative overflow-hidden group hover:border-violet-400 hover:ring-1 hover:ring-violet-500/20 transition-all">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-violet-500/10 rounded-full blur-xl group-hover:bg-violet-500/20 transition-colors"></div>
            <div className="flex items-center gap-3 mb-auto z-10">
              <div className="p-2 bg-violet-50 rounded-lg group-hover:bg-violet-100 transition-colors">
                <ShoppingBag className="w-5 h-5 text-violet-600" />
              </div>
              <p className="text-sm font-bold text-secondary-900">Product Sales</p>
            </div>
            <span className="text-xs font-bold text-violet-600 group-hover:translate-x-1 transition-transform z-10">View Sales &rarr;</span>
          </a>
          <a href="/marketplace/revenue" className="bg-white p-5 rounded-2xl shadow-sm border border-secondary-200 flex flex-col h-28 relative overflow-hidden group hover:border-fuchsia-400 hover:ring-1 hover:ring-fuchsia-500/20 transition-all">
            <div className="absolute -right-4 -top-4 w-16 h-16 bg-fuchsia-500/10 rounded-full blur-xl group-hover:bg-fuchsia-500/20 transition-colors"></div>
            <div className="flex items-center gap-3 mb-auto z-10">
              <div className="p-2 bg-fuchsia-50 rounded-lg group-hover:bg-fuchsia-100 transition-colors">
                <Store className="w-5 h-5 text-fuchsia-600" />
              </div>
              <p className="text-sm font-bold text-secondary-900">Marketplace Rev</p>
            </div>
            <span className="text-xs font-bold text-fuchsia-600 group-hover:translate-x-1 transition-transform z-10">View Revenue &rarr;</span>
          </a>
        </div>
      </div>

      {/* Row 2: Revenue Analytics, Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-2xl border border-secondary-100 shadow-sm p-6 h-full flex flex-col">
            <div className="flex items-center justify-between mb-6">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <BarChart3 className="w-5 h-5 text-secondary-900" />
                  <h2 className="text-lg font-bold text-secondary-900">Revenue Analytics</h2>
                </div>
                <p className="text-sm text-secondary-500">Monthly breakdown across all channels</p>
              </div>
              <select className="bg-secondary-50 border border-secondary-200 text-sm rounded-lg px-3 py-1.5 focus:outline-none focus:ring-2 focus:ring-primary-500 text-secondary-700 font-medium">
                <option>Last 6 Months</option>
                <option>This Year</option>
                <option>Last Year</option>
              </select>
            </div>
            <div className="h-48 w-full flex-1 mt-4">
              <a href="/reports/revenue" className="flex flex-col items-center justify-center h-full w-full rounded-xl bg-secondary-50 border-2 border-dashed border-secondary-200 hover:border-primary-300 hover:bg-primary-50 transition-colors group">
                <BarChart3 className="w-8 h-8 text-secondary-400 mb-3 group-hover:text-primary-500 transition-colors" />
                <span className="text-secondary-600 font-bold group-hover:text-primary-700 transition-colors">Open Revenue Reports</span>
                <span className="text-xs text-secondary-500 mt-1">View detailed analytics, trends, and forecasts</span>
              </a>
            </div>
          </div>
        </div>
        <div>
          <ServiceLinks />
        </div>
      </div>

      {/* Row 3: Membership Distribution, Marketplace Overview, E-Commerce Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="bg-[#1E1B4B] p-6 rounded-2xl shadow-xl flex flex-col text-white relative overflow-hidden h-full group hover:ring-2 hover:ring-primary-500/50 transition-all">
          <div className="absolute top-0 right-0 w-48 h-48 bg-primary-500/10 blur-3xl group-hover:bg-primary-500/20 transition-colors"></div>
          <div className="flex items-center justify-between mb-2 z-10 relative">
            <div className="flex items-center gap-2">
              <PieChartIcon className="w-5 h-5 text-primary-400" />
              <h2 className="text-lg font-bold text-white">Membership Distribution</h2>
            </div>
            <a href="/memberships" className="text-[10px] uppercase tracking-wider font-bold text-primary-300 hover:text-primary-200 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              Manage Service
            </a>
          </div>
          <p className="text-sm text-primary-200/70 mb-4 z-10 relative">Platform subscriptions breakdown</p>
          <MembershipDistribution />
        </div>
        
        <div>
           <MarketplaceOverview />
        </div>
        
        <div>
           <EcommerceOverview />
        </div>
      </div>

      {/* Row 4: Recent Activities, AI Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 bg-white rounded-2xl border border-secondary-100 shadow-sm p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Activity className="w-5 h-5 text-secondary-900" />
                <h2 className="text-lg font-bold text-secondary-900">Recent Activities</h2>
              </div>
              <p className="text-sm text-secondary-500">Latest platform events across the ecosystem</p>
            </div>
            <a href="/reports" className="text-sm border border-secondary-200 px-3 py-1.5 rounded-lg text-secondary-700 font-medium hover:bg-secondary-50 transition-colors">View All</a>
          </div>
          <div className="flex-1 mt-4">
             <a href="/reports" className="flex flex-col items-center justify-center h-full w-full rounded-xl bg-secondary-50 border-2 border-dashed border-secondary-200 hover:border-secondary-300 hover:bg-white transition-colors group py-12">
                <Activity className="w-8 h-8 text-secondary-400 mb-3 group-hover:text-secondary-600 transition-colors" />
                <span className="text-secondary-600 font-bold group-hover:text-secondary-900 transition-colors">Open Activity Feed</span>
                <span className="text-xs text-secondary-500 mt-1">View latest platform events across the ecosystem</span>
              </a>
          </div>
        </div>
        <div className="h-full">
          <AiInsights />
        </div>
      </div>

      {/* Row 5: Top Trainers, Top Products, Top Vendors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl border border-secondary-100 shadow-sm p-6 flex flex-col h-full">
           <div className="flex items-center gap-2 mb-6">
             <Dumbbell className="w-5 h-5 text-secondary-900" />
             <h2 className="text-lg font-bold text-secondary-900">Top Trainers</h2>
           </div>
           <div className="flex-1 mt-4">
             <a href="/trainers" className="flex flex-col items-center justify-center h-full w-full rounded-xl bg-secondary-50 border-2 border-dashed border-secondary-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors group py-12">
                <Dumbbell className="w-8 h-8 text-secondary-400 mb-3 group-hover:text-emerald-500 transition-colors" />
                <span className="text-secondary-600 font-bold group-hover:text-emerald-700 transition-colors">Manage Trainers</span>
                <span className="text-xs text-secondary-500 mt-1">View trainer schedules and performance</span>
             </a>
           </div>
        </div>
        
        <div className="bg-white rounded-2xl border border-secondary-100 shadow-sm p-6 flex flex-col h-full">
           <div className="flex items-center gap-2 mb-6">
             <Package className="w-5 h-5 text-secondary-900" />
             <h2 className="text-lg font-bold text-secondary-900">E-Commerce Products</h2>
           </div>
           <div className="flex-1 mt-4">
             <a href="/store/products" className="flex flex-col items-center justify-center h-full w-full rounded-xl bg-secondary-50 border-2 border-dashed border-secondary-200 hover:border-violet-300 hover:bg-violet-50 transition-colors group py-12">
                <Package className="w-8 h-8 text-secondary-400 mb-3 group-hover:text-violet-500 transition-colors" />
                <span className="text-secondary-600 font-bold group-hover:text-violet-700 transition-colors">Manage Products</span>
                <span className="text-xs text-secondary-500 mt-1">View inventory and sales data</span>
             </a>
           </div>
        </div>

        <div className="bg-white rounded-2xl border border-secondary-100 shadow-sm p-6 flex flex-col h-full">
           <div className="flex items-center gap-2 mb-6">
             <Store className="w-5 h-5 text-secondary-900" />
             <h2 className="text-lg font-bold text-secondary-900">Top Vendors</h2>
           </div>
           <div className="flex-1 mt-4">
             <a href="/marketplace/vendors" className="flex flex-col items-center justify-center h-full w-full rounded-xl bg-secondary-50 border-2 border-dashed border-secondary-200 hover:border-amber-300 hover:bg-amber-50 transition-colors group py-12">
                <Store className="w-8 h-8 text-secondary-400 mb-3 group-hover:text-amber-500 transition-colors" />
                <span className="text-secondary-600 font-bold group-hover:text-amber-700 transition-colors">Manage Vendors</span>
                <span className="text-xs text-secondary-500 mt-1">View vendor performance and payouts</span>
             </a>
           </div>
        </div>
      </div>
    </div>
  );
}
