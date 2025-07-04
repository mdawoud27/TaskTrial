import { Router } from 'express';
import {
  addOwners,
  createOrganization,
  deleteOrganization,
  deleteOrganizationLogo,
  getAllOrganizations,
  getSpecificOrganization,
  joinToOrg,
  resendOTP,
  updateOrganization,
  uploadOrganizationLogo,
  userOrgStatus,
  verifyOrganization,
} from '../controllers/organization.controller.js';
import { verifyAccessToken } from '../middlewares/auth.middleware.js';
import { verifyAdminPermission } from '../middlewares/verifyAdminPermission.middleware.js';
import upload from '../middlewares/upload.middleware.js';

const router = Router();

router.post('/api/organization', verifyAccessToken, createOrganization);
router.post('/api/organization/join', verifyAccessToken, joinToOrg);
router.get('/api/organization/status', verifyAccessToken, userOrgStatus);
router.post('/api/organization/resendOTP/:orgId', verifyAccessToken, resendOTP);
router.post(
  '/api/organization/verifyOrg/:orgId',
  verifyAccessToken,
  verifyOrganization,
);
router.get(
  '/api/organization/all',
  verifyAccessToken,
  verifyAdminPermission,
  getAllOrganizations,
);
router.get(
  '/api/organization/:organizationId',
  verifyAccessToken,
  getSpecificOrganization,
);
router.put(
  '/api/organization/:organizationId',
  verifyAccessToken,
  updateOrganization,
);
router.delete(
  '/api/organization/:organizationId',
  verifyAccessToken,
  deleteOrganization,
);
router.post(
  '/api/organization/:organizationId/addOwner',
  verifyAccessToken,
  addOwners,
);
router.post(
  '/api/organization/:organizationId/logo/upload',
  verifyAccessToken,
  upload.single('image'),
  uploadOrganizationLogo,
);
router.delete(
  '/api/organization/:organizationId/logo/delete',
  verifyAccessToken,
  deleteOrganizationLogo,
);

export default router;
