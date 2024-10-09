import { Injectable } from '@angular/core';
import { Calendardate } from '../models/calendardate';
import { IUser } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor() { }

  users: IUser[] = [
    
  ]

  days: Calendardate[] = [
    {
      date: new Date(2024, 8, 1), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: false, }, { hour: '09:00', isUsed: true, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 2), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: true, }, { hour: '08:00', isUsed: false, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: true },
        { hour: '13:00', isUsed: false, }, { hour: '14:00', isUsed: true, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: false, }, { hour: '18:00', isUsed: true, },]
    },
    {
      date: new Date(2024, 8, 3), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: false, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: true, }, { hour: '16:00', isUsed: false, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 4), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: true, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: true },
        { hour: '13:00', isUsed: false, }, { hour: '14:00', isUsed: true, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: false, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 5), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: false, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 6), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: true, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: false, }, { hour: '11:00', isUsed: true, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 7), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: true, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: false, }, { hour: '11:00', isUsed: true, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: false, }, { hour: '18:00', isUsed: true, },]
    },
    {
      date: new Date(2024, 8, 8), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: false, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: false, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 9), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: true, }, { hour: '08:00', isUsed: false, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: true, }, { hour: '16:00', isUsed: false, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 10), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: false, }, { hour: '09:00', isUsed: true, }, { hour: '10:00', isUsed: false, }, { hour: '11:00', isUsed: true, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: true, }, { hour: '16:00', isUsed: false, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 11), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: false, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 12), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: true, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: true, }, { hour: '16:00', isUsed: false, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 13), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: true, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: false, }, { hour: '11:00', isUsed: true, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 14), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: true, }, { hour: '08:00', isUsed: false, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: false, }, { hour: '11:00', isUsed: true, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: true, }, { hour: '16:00', isUsed: false, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 15), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: true, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: false, }, { hour: '11:00', isUsed: true, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: false, }, { hour: '18:00', isUsed: true, },]
    },
    {
      date: new Date(2024, 8, 16), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: true, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: true, }, { hour: '16:00', isUsed: false, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 17), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: true, }, { hour: '08:00', isUsed: false, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: false, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 18), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: false, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: false, }, { hour: '18:00', isUsed: true, },]
    },
    {
      date: new Date(2024, 8, 19), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: true, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: false, }, { hour: '11:00', isUsed: true, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: false, }, { hour: '18:00', isUsed: true, },]
    },
    {
      date: new Date(2024, 8, 20), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: true, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: false, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 21), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: true, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: false, }, { hour: '11:00', isUsed: true, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 22), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: true, }, { hour: '08:00', isUsed: false, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: false, }, { hour: '11:00', isUsed: true, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: true, }, { hour: '16:00', isUsed: false, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 23), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: false, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: true, }, { hour: '17:00', isUsed: false, }, { hour: '18:00', isUsed: true, },]
    },
    {
      date: new Date(2024, 8, 24), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: true, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: false, }, { hour: '11:00', isUsed: true, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: true, }, { hour: '16:00', isUsed: false, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 25), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: true, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: true, }, { hour: '16:00', isUsed: false, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 26), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: true, }, { hour: '08:00', isUsed: false, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: false, }, { hour: '11:00', isUsed: true, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: true, }, { hour: '16:00', isUsed: false, }, { hour: '17:00', isUsed: true, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 27), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: true, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: false, }, { hour: '11:00', isUsed: true, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: true, }, { hour: '16:00', isUsed: false, }, { hour: '17:00', isUsed: false, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 28), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: true, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: false, }, { hour: '11:00', isUsed: true, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: true, }, { hour: '16:00', isUsed: false, }, { hour: '17:00', isUsed: false, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 29), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: false, }, { hour: '08:00', isUsed: true, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: true, }, { hour: '11:00', isUsed: false, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: false, }, { hour: '16:00', isUsed: false, }, { hour: '17:00', isUsed: false, }, { hour: '18:00', isUsed: false, },]
    },
    {
      date: new Date(2024, 8, 30), isUsed: false, completeschedule: [
        { hour: '07:00', isUsed: true, }, { hour: '08:00', isUsed: false, }, { hour: '09:00', isUsed: false, }, { hour: '10:00', isUsed: false, }, { hour: '11:00', isUsed: true, }, { hour: '12:00', isUsed: false },
        { hour: '13:00', isUsed: true, }, { hour: '14:00', isUsed: false, }, { hour: '15:00', isUsed: true, }, { hour: '16:00', isUsed: false, }, { hour: '17:00', isUsed: false, }, { hour: '18:00', isUsed: false, },]
    },
  ]




}
