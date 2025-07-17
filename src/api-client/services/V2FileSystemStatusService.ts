/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2FileSystemStatusService {
    /**
     * Gets system file status. Returns usable space, total space, available space and in use space.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2FileSystemStatus({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/file-system-status',
            headers: {
                'Accept': accept,
            },
        });
    }
}
