import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import { db } from './firebase-config';
import { useState, useEffect } from 'react';
import { collection, getDocs } from 'firebase/firestore';

function getDormRating(dormPath) {
    return 4;
}