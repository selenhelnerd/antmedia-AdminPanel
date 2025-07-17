/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2AdminStatusService {
    /**
     * Returns whether current user is admin or not. If user is admin, it can call POST/PUT/DELETE methods
     * @returns any OK
     * @throws ApiError
     */
    public static getV2AdminStatus({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/admin-status',
            headers: {
                'Accept': accept,
            },
        });
    }
}
