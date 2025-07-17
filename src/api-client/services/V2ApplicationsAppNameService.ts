/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2ApplicationsAppNameService {
    /**
     * Creates a new application with given name. It just creates default app
     * @returns any OK
     * @throws ApiError
     */
    public static postV2Applications({
        appName,
        accept,
        requestBody,
    }: {
        appName: string,
        accept?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/applications/{appName}',
            path: {
                'appName': appName,
            },
            headers: {
                'Accept': accept,
            },
            body: requestBody,
        });
    }
    /**
     * Creates a new application with given name. It supports uploading custom WAR files
     * @returns any OK
     * @throws ApiError
     */
    public static putV2Applications({
        appName,
        contentType,
        accept,
        formData,
    }: {
        appName: string,
        contentType?: string,
        accept?: string,
        formData?: Record<string, any>,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/v2/applications/{appName}',
            path: {
                'appName': appName,
            },
            headers: {
                'Content-Type': contentType,
                'Accept': accept,
            },
            formData: formData,
            mediaType: 'multipart/form-data',
        });
    }
    /**
     * Deletes application with the given name.
     * @returns any OK
     * @throws ApiError
     */
    public static deleteV2Applications({
        appName,
        accept,
        deleteDb,
    }: {
        appName: string,
        accept?: string,
        deleteDb?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/v2/applications/{appName}',
            path: {
                'appName': appName,
            },
            headers: {
                'Accept': accept,
            },
            query: {
                'deleteDB': deleteDb,
            },
        });
    }
}
