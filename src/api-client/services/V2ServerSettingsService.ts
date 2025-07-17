/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ServerSettingsService {
    /**
     * Returns the server settings. From log level to measurement period of cpu, license key of the server host address,ssl configuration and many more settings are returned at once.
     * @returns any OK
     * @throws ApiError
     */
    public static getV2ServerSettings({
        accept,
    }: {
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/server-settings',
            headers: {
                'Accept': accept,
            },
        });
    }
    /**
     * Changes server settings. Sets Server Name, license key, market build status and node group.
     * @returns any OK
     * @throws ApiError
     */
    public static postV2ServerSettings({
        contentType,
        accept,
        requestBody,
    }: {
        contentType?: string,
        accept?: string,
        requestBody?: Record<string, any>,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/server-settings',
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
