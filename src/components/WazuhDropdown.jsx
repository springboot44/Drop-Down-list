import React, { useState } from 'react';
import { Monitor, ChevronDown, ChevronUp } from 'lucide-react';
import {wazuhMinis} from './wazuhMinis.js'

const WazuhDropdown = () => {
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [openMenus, setOpenMenus] = useState({
    'wazuh-mini-1': false,
    'wazuh-mini-2': false,
    'wazuh-mini-3': false,
    'wazuh-mini-4': false,
    'wazuh-mini-5': false,
    'wazuh-mini-6': false
  });

  const toggleMenu = (menuKey) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuKey]: !prev[menuKey]
    }));
  };

 

  return (
    <div className="w-64 bg-white shadow-md">
      <div 
        className="flex items-center p-2 bg-gray-100 cursor-pointer"
        onClick={() => setIsDashboardOpen(!isDashboardOpen)}
      >
        <Monitor className="mr-3 h-5 w-5" />
        Wazuh Dashboard
        {isDashboardOpen 
          ? <ChevronUp className="ml-2 h-4 w-4" /> 
          : <ChevronDown className="ml-2 h-4 w-4" />
        }
      </div>
      
      {isDashboardOpen && (
        <ul>
          {wazuhMinis.map((mini, index) => (
            <li key={index} className="relative">
              <div 
                className="flex items-center p-2 cursor-pointer hover:bg-gray-100"
                onClick={() => toggleMenu(`wazuh-mini-${index + 1}`)}
              >
                {mini.label}
                {openMenus[`wazuh-mini-${index + 1}`] 
                  ? <ChevronUp className="ml-2 h-4 w-4" /> 
                  : <ChevronDown className="ml-2 h-4 w-4" />
                }
              </div>
              
              {openMenus[`wazuh-mini-${index + 1}`] && (
                <ul className="pl-4 bg-gray-50">
                  {mini.children.map((dashboard, dashIndex) => (
                    <li key={dashIndex} className="py-1">
                      <a 
                        href={dashboard.href} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-gray-900"
                      >
                        {dashboard.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WazuhDropdown;