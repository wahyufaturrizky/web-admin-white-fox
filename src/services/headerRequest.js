import axios from 'axios';
import { auth } from './auth';
/**
 * @author wahyu fatur rizki | linkedin.com/in/wahyu-fatur-rizky/
 * @return { obj }
 * Custom Header axios,
 * create from
 * using this function should axios().get(values)
 */

export const RequestPublic = () => {
	return axios.create({
		baseURL: process.env.REACT_APP_URL_EPROC,
	});
};

export const Request = () => {
	return axios.create({
		baseURL: process.env.REACT_APP_URL_EPROC,
		headers: {
			Authorization: `Bearer ${auth()}`,
			Accept: 'application/json',
		},
	});
};

export const RequestDownloadFile = () => {
	return axios.create({
		baseURL: process.env.REACT_APP_URL_EPROC,
		headers: {
			Authorization: `Bearer ${auth()}`,
			Accept: 'application/json',
			'Content-Dispotition': 'attachment',
		},
	});
};

export const RequestUploadFile = () => {
	return axios.create({
		baseURL: process.env.REACT_APP_URL_EPROC,
		headers: {
			Authorization: `Bearer ${auth()}`,
			Accept: 'application/json',
			'Content-Type': 'multipart/form-data',
		},
	});
};
