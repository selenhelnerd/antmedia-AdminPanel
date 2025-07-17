/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2VodsSynchUserVodListService {
    /**
     * Deprecated. Use import VoDs. Synchronize VoD Folder and add them to VoD database if any file exist and create symbolic links to that folder
     * Notes here
     * @returns any OK
     * @throws ApiError
     */
    public static postV2VodsSynchUserVodList({
        accept,
        requestBody,
    }: {
        accept?: string,
        requestBody?: any,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/v2/vods/synch-user-vod-list',
            headers: {
                'Accept': accept,
            },
            body: requestBody,
        });
    }
}
