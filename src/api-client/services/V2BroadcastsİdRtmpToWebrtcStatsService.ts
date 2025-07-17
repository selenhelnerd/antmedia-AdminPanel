/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class V2BroadcastsİdRtmpToWebrtcStatsService {
    /**
     * Get RTMP to WebRTC path stats in general
     * @returns any OK
     * @throws ApiError
     */
    public static getV2BroadcastsRtmpToWebrtcStats({
        id,
        accept,
    }: {
        id: string,
        accept?: string,
    }): CancelablePromise<Record<string, any>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/v2/broadcasts/{id}/rtmp-to-webrtc-stats',
            path: {
                'id': id,
            },
            headers: {
                'Accept': accept,
            },
        });
    }
}
