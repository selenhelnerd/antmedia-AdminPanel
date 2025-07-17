/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApplicationsSettingsAppnameService {
    /**
     * Returns the specified application settings
     * @returns any OK
     * @throws ApiError
     */
    public static getV2ApplicationsSettings({
        appname,
        accept,
    }: {
        appname: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/applications/settings/{appname}',
            path: {
                'appname': appname,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
    /**
     * Changes the application settings with the given settings. Null fields will be set to default values.
     * @returns any OK
     * @throws ApiError
     */
    public static postV2ApplicationsSettings({
        appname,
        contentType,
        accept,
        requestBody,
    }: {
        appname: string,
        contentType?: string,
        accept?: string,
        requestBody?: Record<string, any>,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/applications/settings/{appname}',
            path: {
                'appname': appname,
            },
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
            body: requestBody,
            mediaType: 'application/json',
        });
    }
}
