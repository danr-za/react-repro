import React, { lazy } from 'react';

export const LazyLoadComponent = lazy(() => import('./lazy').then(d => ({default: d.LazyComponent})))
