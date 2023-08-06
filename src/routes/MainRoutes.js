import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import { NewsFeed } from '../pages';


export const MainRoutes = function () {

    return (
        <Routes>
            <Route path="/" element={<Navigate to='/main' />} />
            <Route path="/main" element={<NewsFeed />} />
            <Route path="*" element={<h1>This route does not exist</h1>} />
        </Routes>
    );
};
